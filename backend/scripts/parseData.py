import pandas as pd
import psycopg2
import os

def create_table(cursor):
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS exchange_rates (
            currency_code VARCHAR(3) PRIMARY KEY,
            rate NUMERIC,
            last_updated DATE
        );
    """)
    print("Table 'exchange_rates' ensured to exist.")

def parse_data():

    try:
        connection_string = os.getenv("EXTERNAL_DATABASE_URL")
        if not connection_string:
            raise ValueError("EXTERNAL_DATABASE_URL environment variable not set")
        # Mask the password before printing
        masked_connection_string = connection_string.replace(
            connection_string.split(':')[2].split('@')[0], '***'
        )
        print(f"Connecting to database with connection string: {masked_connection_string}")  # Debug info
        conn = psycopg2.connect(connection_string)
        cursor = conn.cursor()
        print("Database connection successful!")
    except Exception as err:
        print(f"Error: {err}")
        return

    create_table(cursor)

    current_dir = os.path.dirname(os.path.abspath(__file__))
    csv_file_path = os.path.join(current_dir, "../data/exchange_rates.csv")

    try:
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
                    INSERT INTO exchange_rates (currency_code, rate, last_updated)
                    VALUES (%s, %s, %s)
                    ON CONFLICT (currency_code) DO UPDATE SET
                        rate = EXCLUDED.rate,
                        last_updated = EXCLUDED.last_updated;
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

if __name__ == "__main__":
    parse_data()
