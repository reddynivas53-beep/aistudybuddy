import pdfplumber  # Changed from PyPDF2
from docx import Document
import os

class TextExtractor:
    """Extract text from different file types"""
    
    @staticmethod
    def extract_pdf(file_path):
        """Extract text from PDF using pdfplumber (better accuracy)"""
        text = ""
        try:
            with pdfplumber.open(file_path) as pdf:
                for page in pdf.pages:
                    page_text = page.extract_text()
                    if page_text:
                        text += page_text + "\n"
        except Exception as e:
            return f"Error extracting PDF: {str(e)}"
        return text
    
    @staticmethod
    def extract_docx(file_path):
        """Extract text from DOCX"""
        text = ""
        try:
            doc = Document(file_path)
            for paragraph in doc.paragraphs:
                text += paragraph.text + "\n"
        except Exception as e:
            return f"Error extracting DOCX: {str(e)}"
        return text
    
    @staticmethod
    def extract_txt(file_path):
        """Extract text from TXT"""
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                return file.read()
        except UnicodeDecodeError:
            # Try different encoding
            with open(file_path, 'r', encoding='latin-1') as file:
                return file.read()
        except Exception as e:
            return f"Error extracting TXT: {str(e)}"
    
    @staticmethod
    def extract_text(file_path, file_extension):
        """Main method to extract text based on file type"""
        file_extension = file_extension.lower()
        
        if file_extension == '.pdf':
            return TextExtractor.extract_pdf(file_path)
        elif file_extension == '.docx':
            return TextExtractor.extract_docx(file_path)
        elif file_extension == '.txt':
            return TextExtractor.extract_txt(file_path)
        else:
            return "Unsupported file type"