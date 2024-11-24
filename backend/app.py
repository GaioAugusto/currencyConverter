from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)  # Enable CORS (adjust allowed origins for security in production)

# Load environment variables
load_dotenv()

# Database connection settings
db_config = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
    "port": int(os.getenv("DB_PORT", 3306)),  # Ensure port is correctly parsed
}

def get_db_connection():
    """Establish and return a database connection."""
    try:
        conn = mysql.connector.connect(**db_config)
        return conn
    except mysql.connector.Error as err:
        print(f"Error connecting to the database: {err}")
        return None

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Welcome to the Currency Converter API!"})

@app.route("/api/exchange-rates", methods=["GET"])
def get_exchange_rates():
    """Fetch exchange rates from the database and return as JSON."""
    conn = get_db_connection()
    if conn is None:
        return jsonify({"success": False, "error": "Database connection failed"}), 500

    try:
        cursor = conn.cursor(dictionary=True)
        query = "SELECT currency_code, rate, last_updated FROM exchange_rates ORDER BY last_updated DESC"
        cursor.execute(query)
        rates = cursor.fetchall()
        return jsonify({"success": True, "data": rates})
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)  # Ensure the app runs on the correct interface
