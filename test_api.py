import requests

# Your API key
API_KEY = "YOUR_API_KEY_HERE"  # Replace with your actual key

url = f"https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key={API_KEY}"

headers = {"Content-Type": "application/json"}
payload = {
    "contents": [{"parts": [{"text": "Hello"}]}]
}

response = requests.post(url, headers=headers, json=payload)
print(f"Status Code: {response.status_code}")
print(f"Response: {response.text}")
