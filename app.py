from flask import Flask, render_template, request, jsonify
from db import get_connection

# Explicitly tell Flask where to find static and templates
app = Flask(__name__, static_folder="static", template_folder="templates")

@app.route('/')
def index():
    return render_template('index.html')

# ----- API ROUTES -----
@app.route('/students', methods=['GET'])
def get_students():
    conn = get_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM students")
    students = cursor.fetchall()
    conn.close()
    return jsonify(students)

@app.route('/add', methods=['POST'])
def add_student():
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO students (name, age, grade) VALUES (%s, %s, %s)",
                   (data["name"], data["age"], data["grade"]))
    conn.commit()
    conn.close()
    return jsonify({"message": "✅ Student added successfully!"})

@app.route('/update/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE students SET name=%s, age=%s, grade=%s WHERE id=%s",
                   (data["name"], data["age"], data["grade"], id))
    conn.commit()
    conn.close()
    return jsonify({"message": "🔁 Student updated successfully!"})

@app.route('/delete/<int:id>', methods=['DELETE'])
def delete_student(id):
    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM students WHERE id=%s", (id,))
    conn.commit()
    conn.close()
    return jsonify({"message": "🗑️ Student deleted successfully!"})

if __name__ == "__main__":
    app.run(debug=True)
