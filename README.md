🎓 Student Management System
A sleek, modern, and responsive web application built using Flask, MySQL, HTML, CSS, and JavaScript to manage student records with CRUD functionality and light/dark themes.

🖥️ Preview
<p align="center"> <img src="https://user-images.githubusercontent.com/00000000/placeholder-preview.gif" alt="Student Management Demo" width="700"/> </p>
✨ Add, update, delete, and search students easily with a smooth, glowing UI and animated dark/light mode toggle.

⚡ Features
✅ Add, Edit, Delete Students — Full CRUD operations
✅ MySQL Database Integration — Persistent backend storage
✅ Dynamic Search — Real-time filtering by name or grade
✅ Dark/Light Mode — Toggle with animated icons
✅ Modern UI/UX — Gradient buttons, smooth transitions, and responsive design
✅ Snackbar Notifications — Instant feedback for every action
✅ Mobile Friendly — Works beautifully on all devices

🧩 Tech Stack
Layer	Technologies Used
Frontend	HTML, CSS, JavaScript, Feather Icons
Backend	Flask (Python)
Database	MySQL
Styling	Custom responsive layout with light/dark mode
Hosting (optional)	Render / Railway / PythonAnywhere
🚀 Getting Started (Run Locally)
Follow these steps to run this project on your computer 👇

1️⃣ Clone the Repository
git clone https://github.com/<your-username>/student-management-system.git
cd student-management-system
2️⃣ Create a Virtual Environment
python -m venv venv
Activate it:

On Windows

venv\Scripts\activate
On macOS/Linux

source venv/bin/activate
3️⃣ Install Dependencies
pip install -r requirements.txt
4️⃣ Setup Your MySQL Database
Open MySQL Workbench or terminal

Run these commands:

CREATE DATABASE student_management;
USE student_management;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    grade VARCHAR(5)
);
Update your database connection in db.py (example):

import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="your_password_here",
        database="student_management"
    )
5️⃣ Run the Application
python app.py
You’ll see:

* Running on http://127.0.0.1:5000
Open that link in your browser 🎉

🗂️ Project Structure
student-management/
│
├── app.py                 # Main Flask application
├── db.py                  # Database connection setup
├── requirements.txt       # Python dependencies
│
├── templates/
│   └── index.html         # Frontend layout (HTML)
│
├── static/
│   ├── style.css          # Styling and themes
│   └── script.js          # JavaScript logic
│
└── README.md              # Documentation
