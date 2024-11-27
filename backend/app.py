from flask import Flask, jsonify
from flask_cors import CORS
import os
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)

def get_db_connection():
    """Establish and return a database connection."""
    try:
        connection_string = os.getenv("EXTERNAL_DATABASE_URL")
        if not connection_string:
            raise ValueError("EXTERNAL_DATABASE_URL environment variable not set")
        masked_connection_string = connection_string.replace(
            connection_string.split(':')[2].split('@')[0], '***'
        )
        print(f"Connecting to database with connection string: {masked_connection_string}")  # Debug info
        conn = psycopg2.connect(connection_string)
        return conn
    except Exception as err:
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
        cursor = conn.cursor(cursor_factory=RealDictCursor)
        query = "SELECT currency_code, rate, last_updated FROM exchange_rates ORDER BY last_updated DESC"
        cursor.execute(query)
        rates = cursor.fetchall()
        return jsonify({"success": True, "data": rates})
    except Exception as e:
        print(f"Error executing query: {e}")  # Added for debugging
        return jsonify({"success": False, "error": str(e)}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == "__main__":
    app.run()
