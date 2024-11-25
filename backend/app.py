from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from dotenv import load_dotenv
import os

app = Flask(__name__)
CORS(app)  # Allow requests from any origin (adjust for production if needed)

# Load environment variables
load_dotenv()

# Database connection settings
db_config = {
    "host": os.getenv("DB_HOST"),
    "user": os.getenv("DB_USER"),
    "password": os.getenv("DB_PASSWORD"),
    "database": os.getenv("DB_NAME"),
}

def get_db_connection():
    """Establish and return a database connection."""
    conn = mysql.connector.connect(**db_config)
    return conn

@app.route("/", methods=["GET"])
def index():
    return jsonify({"message": "Welcome to the Currency Converter API!"})

@app.route("/api/exchange-rates", methods=["GET"])  # Move this above the function definition
def get_exchange_rates():
    """Fetch exchange rates from the database and return as JSON."""
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)

        # Query to fetch exchange rates
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
    app.run()
