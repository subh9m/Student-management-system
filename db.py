import mysql.connector

def get_connection():
    return mysql.connector.connect(
        host="localhost",   # or 127.0.0.1
        user="root",        # change if your MySQL username differs
        password="Letmedie@69",        # enter your MySQL password
        database="student_db"
    )
