import os
import json
import re
from datetime import datetime
from flask import Flask, render_template, request, jsonify, send_from_directory, session
from werkzeug.utils import secure_filename
from text_extractor import TextExtractor
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables
load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY', 'study-buddy-secret-key-123')

# Configure Google Gemini API
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
if GEMINI_API_KEY:
    genai.configure(api_key=GEMINI_API_KEY)
    # Using gemini-1.5-flash (stable and free). 
    # If you get 404 errors, change this to 'gemini-pro' or 'gemini-1.0-pro'
    model = genai.GenerativeModel('gemini-2.5-flash')
else:
    print("⚠️ WARNING: GEMINI_API_KEY not found in .env file!")
    model = None

# --- Configuration ---
UPLOAD_FOLDER = 'static/uploads'
ALLOWED_EXTENSIONS = {'pdf', 'txt', 'docx'}
MAX_FILE_SIZE = 100 * 1024 * 1024  # 100MB (Increased to prevent 413 errors)

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = MAX_FILE_SIZE
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

uploaded_doc_context = {}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Helper to clean JSON responses from AI (removes markdown code blocks)
def clean_json_response(text):
    text = re.sub(r'^```json\s*', '', text)
    text = re.sub(r'\s*```$', '', text)
    return text.strip()

# ==================== ROUTES ====================

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            return jsonify({'error': 'No file part'}), 400
        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400
        if file and allowed_file(file.filename):
            try:
                original_filename = secure_filename(file.filename)
                timestamp = datetime.now().strftime('%Y%m%d_%H%M%S_')
                filename = timestamp + original_filename
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                file.save(filepath)
                file_extension = '.' + filename.rsplit('.', 1)[1].lower()
                extracted_text = TextExtractor.extract_text(filepath, file_extension)
                file_size_kb = os.path.getsize(filepath) / 1024
                word_count = len(extracted_text.split()) if extracted_text.strip() else 0
                return jsonify({
                    'success': True, 'message': 'File processed', 'filename': filename,
                    'file_size': f"{file_size_kb:.2f} KB", 'extracted_text': extracted_text,
                    'text_length': len(extracted_text), 'word_count': word_count
                })
            except Exception as e:
                return jsonify({'error': str(e)}), 500
        else:
            return jsonify({'error': 'File type not allowed'}), 400
    return render_template('upload.html')

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/api/extract-text', methods=['POST'])
def api_extract_text():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    if not allowed_file(file.filename):
        return jsonify({'error': 'Invalid file type'}), 400
    filename = secure_filename(file.filename)
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S_')
    filename = timestamp + filename
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
    file.save(filepath)
    file_extension = '.' + filename.rsplit('.', 1)[1].lower()
    extracted_text = TextExtractor.extract_text(filepath, file_extension)
    return jsonify({'success': True, 'filename': filename, 'text': extracted_text, 'word_count': len(extracted_text.split())})

# ==========================================
# CHAT & PDF UPLOAD
# ==========================================

@app.route('/upload-pdf', methods=['POST'])
def upload_pdf_for_chat():
    try:
        if 'pdf' not in request.files:
            return jsonify({'success': False, 'error': 'No PDF file provided'}), 400
        file = request.files['pdf']
        if file.filename == '' or not allowed_file(file.filename):
            return jsonify({'success': False, 'error': 'Invalid file'}), 400

        original_filename = secure_filename(file.filename)
        timestamp = datetime.now().strftime('%Y%m%d_%H%M%S_')
        filename = timestamp + original_filename
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(filepath)
        file_extension = '.' + filename.rsplit('.', 1)[1].lower()
        
        try:
            extracted_text = TextExtractor.extract_text(filepath, file_extension)
        except Exception:
            extracted_text = "Document uploaded, but text could not be extracted."

        session_id = session.get('session_id', os.urandom(16).hex())
        session['session_id'] = session_id
        uploaded_doc_context[session_id] = extracted_text[:10000]
        
        return jsonify({'success': True, 'filename': original_filename, 'message': f'Processed {original_filename}'})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('message', '')
    if not user_message:
        return jsonify({'success': False, 'error': 'Empty message'}), 400

    session_id = session.get('session_id')
    context = uploaded_doc_context.get(session_id, '')

    if context:
        prompt = f"You are an AI Study Assistant. The user uploaded a document:\n\n{context}\n\nUser question: {user_message}\n\nAnswer based on the document."
    else:
        prompt = f"You are AI Study Buddy. User question: {user_message}\n\nProvide a helpful educational response."

    try:
        if model is None:
            return jsonify({'success': False, 'error': 'API key missing'}), 500
        response = model.generate_content(prompt)
        return jsonify({'success': True, 'response': response.text})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

# ==========================================
# NEW: QUIZ, SUMMARIZER & FLASHCARDS
# ==========================================

@app.route('/api/quiz', methods=['POST'])
def generate_quiz():
    try:
        data = request.json
        topic = data.get('text', '')
        if not topic:
            return jsonify({'success': False, 'error': 'No topic provided'}), 400
        if model is None:
            return jsonify({'success': False, 'error': 'API key missing'}), 500

        prompt = f"""Generate 5 multiple-choice quiz questions about "{topic}".
Format the response as a strict JSON array like this:
[
  {{
    "question": "Question text?",
    "options": ["Option A", "Option B", "Option C", "Option D"],
    "correct_answer": "Exact correct option text"
  }}
]
Only return the JSON array, no other text."""

        response = model.generate_content(prompt)
        clean_text = clean_json_response(response.text)
        quiz_data = json.loads(clean_text)
        return jsonify({'success': True, 'quiz': quiz_data})
    except Exception as e:
        print(f"Quiz error: {str(e)}")
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/summarize', methods=['POST'])
def summarize_notes():
    try:
        data = request.json
        text = data.get('text', '')
        if not text:
            return jsonify({'success': False, 'error': 'No text provided'}), 400
        if model is None:
            return jsonify({'success': False, 'error': 'API key missing'}), 500

        prompt = f"Summarize the following study notes clearly and concisely, using bullet points:\n\n{text}"
        response = model.generate_content(prompt)
        return jsonify({'success': True, 'summary': response.text})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/flashcards', methods=['POST'])
def generate_flashcards():
    try:
        data = request.json
        text = data.get('text', '')
        if not text:
            return jsonify({'success': False, 'error': 'No text provided'}), 400
        if model is None:
            return jsonify({'success': False, 'error': 'API key missing'}), 500

        prompt = f"""Based on this text: "{text}", generate 5 flashcards.
Format as a strict JSON array:
[
  {{"question": "Question?", "answer": "Answer"}}
]
Only return the JSON array."""

        response = model.generate_content(prompt)
        clean_text = clean_json_response(response.text)
        cards = json.loads(clean_text)
        return jsonify({'success': True, 'cards': cards})
    except Exception as e:
        print(f"Flashcard error: {str(e)}")
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    print("\n" + "="*50)
    print("🚀 AI Study Buddy Started Successfully!")
    print("📌 Open: http://localhost:5000")
    if model:
        print("✅ Google Gemini AI is connected!")
    else:
        print("⚠️ WARNING: No Gemini API key found.")
    print("="*50 + "\n")
    app.run(debug=True, host='127.0.0.1', port=5000)
    import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)