import pandas as pd
import mysql.connector
from dotenv import load_dotenv, find_dotenv
import os

def parse_data():
    load_dotenv(find_dotenv())

    # Database connection
    try:
        conn = mysql.connector.connect(
            host=os.getenv("DB_HOST"),
            user=os.getenv("DB_USER"),
            password=os.getenv("DB_PASSWORD"),
            database=os.getenv("DB_NAME"),
            # port=int(os.getenv("DB_PORT", 3306)),
        )
        cursor = conn.cursor()
        print("Database connection successful!")
    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return

    # CSV file path
    current_dir = os.path.dirname(os.path.abspath(__file__))
    csv_file_path = os.path.join(current_dir, "../data/exchange_rates.csv")

    try:
        # Load and process CSV
        df = pd.read_csv(csv_file_path)
        df = df.iloc[:, :-1]  # Drop the last column
        print("CSV file loaded successfully!")
        df['Date'] = pd.to_datetime(df['Date'], format='%d %B %Y').dt.date

        # Update database
        for _, row in df.iterrows():
            date = row['Date']
            for currency in df.columns[1:]:
                rate = row[currency]
                cursor.execute(
                    """
                    REPLACE INTO exchange_rates (currency_code, rate, last_updated)
                    VALUES (%s, %s, %s)
                    """,
                    (currency.strip(), rate, date)
                )
        conn.commit()
        print("Database successfully updated with exchange rates!")
    except Exception as e:
        print(f"Error processing CSV: {e}")
    finally:
        cursor.close()
        conn.close()
