
# 🎓 Student Management System  

[![Python](https://img.shields.io/badge/Python-3.12-blue?logo=python&logoColor=white)](https://www.python.org/)
[![Flask](https://img.shields.io/badge/Flask-Backend-lightgrey?logo=flask&logoColor=black)](https://flask.palletsprojects.com/)
[![MySQL](https://img.shields.io/badge/MySQL-Database-orange?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Responsive](https://img.shields.io/badge/Responsive-Design-success?logo=css3&logoColor=white)](#)
[![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat)](#)

> A sleek, modern, and responsive web application built using **Flask**, **MySQL**, **HTML**, **CSS**, and **JavaScript** to manage student records with CRUD functionality and dark/light themes.

---

## 🖥️ Preview

<p align="center">
  <img src="https://user-images.githubusercontent.com/00000000/placeholder-preview.gif" alt="Student Management Demo" width="700"/>
</p>

> ✨ Add, update, delete, and search students easily with a smooth, glowing UI and animated dark/light mode toggle.

---

## ⚡ Features

✅ **Add, Edit, Delete Students** — Full CRUD operations  
✅ **MySQL Database Integration** — Persistent backend storage  
✅ **Dynamic Search** — Real-time filtering by name or grade  
✅ **Dark/Light Mode** — Toggle with animated icons  
✅ **Modern UI/UX** — Gradient buttons, smooth transitions, and responsive design  
✅ **Snackbar Notifications** — Instant feedback for every action  
✅ **Mobile Friendly** — Works beautifully on all devices  

---

## 🧩 Tech Stack

| Layer | Technologies Used |
|:------|:------------------|
| **Frontend** | HTML, CSS, JavaScript, Feather Icons |
| **Backend** | Flask (Python) |
| **Database** | MySQL |
| **Styling** | Custom responsive layout with light/dark mode |
| **Hosting (optional)** | Render / Railway / PythonAnywhere |

---

## 🚀 Getting Started (Run Locally)

Follow these steps to run this project on your computer 👇

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/student-management-system.git
cd student-management-system
````

---

### 2️⃣ Create a Virtual Environment

```bash
python -m venv venv
```

Activate it:

* On **Windows**

  ```bash
  venv\Scripts\activate
  ```

* On **macOS/Linux**

  ```bash
  source venv/bin/activate
  ```

---

### 3️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

---

### 4️⃣ Setup Your MySQL Database

Open MySQL Workbench or terminal
Run these commands:

```sql
CREATE DATABASE student_management;
USE student_management;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    grade VARCHAR(5)
);
```

Update your database connection in `db.py` (example):

```python
import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="your_password_here",
        database="student_management"
    )
```

---

### 5️⃣ Run the Application

```bash
python app.py
```

You’ll see:

```
* Running on http://127.0.0.1:5000
```

Open that link in your browser 🎉

---

## 🗂️ Project Structure

```
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
```

---

## 🌙 Dark / Light Mode Preview

<p align="center">
  <img src="https://user-images.githubusercontent.com/00000000/theme-toggle-demo.gif" width="650" alt="Dark Light Mode Demo"/>
</p>

---

## 💾 How to Push Your Project to GitHub

Follow these steps to upload your local project 👇

1. **Initialize Git**

```bash
git init
```

2. **Add all files**

```bash
git add .
```

3. **Commit your changes**

```bash
git commit -m "Initial commit - Flask Student Management System"
```

4. **Create a GitHub repository**
   Go to [https://github.com/new](https://github.com/new)
   Name it for example: `student-management-system`

5. **Link your local repo to GitHub**

```bash
git remote add origin https://github.com/<your-username>/student-management-system.git
```

6. **Push your project**

```bash
git branch -M main
git push -u origin main
```

✅ Your project is now live on GitHub as a portfolio-ready repository.

---

## 🌐 Optional: Deploy Live

To host this app online:

* **Render.com** → simplest for Flask
* **Railway.app** → free & quick deploy
* **PythonAnywhere** → great for demos

Deployment command (Render):

```bash
gunicorn app:app
```

---

## 💖 Acknowledgements

* [Flask](https://flask.palletsprojects.com/) for lightweight backend
* [Feather Icons](https://feathericons.com/) for SVG icons
* [MySQL](https://www.mysql.com/) for data persistence
* Special thanks to contributors & open-source community 🌍

---

## 📜 License

This project is licensed under the **MIT License** — feel free to use and modify it for your own projects.

---

## ✨ Author

**Your Name**
=
🌐 [github.com/subh9m](https://github.com/yourusername)

---

```

```
