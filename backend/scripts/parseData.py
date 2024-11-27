# import pandas as pd
# import mysql.connector
# from dotenv import load_dotenv, find_dotenv
# import os
# import psycopg2

# def create_table(cursor):
#     cursor.execute("""
#         CREATE TABLE IF NOT EXISTS exchange_rates (
#             currency_code VARCHAR(3) PRIMARY KEY,
#             rate NUMERIC,
#             last_updated DATE
#         );
#     """)
#     print("Table 'exchange_rates' ensured to exist.")

# def parse_data():
#     # load_dotenv(find_dotenv())

#     # # Database connection
#     # try:
#     #     conn = mysql.connector.connect(
#     #         host=os.getenv("DB_HOST"),
#     #         user=os.getenv("DB_USER"),
#     #         password=os.getenv("DB_PASSWORD"),
#     #         database=os.getenv("DB_NAME"),
#     #         # port=int(os.getenv("DB_PORT", 3306)),
#     #     )
#     #     cursor = conn.cursor()
#     #     print("Database connection successful!")
#     # except mysql.connector.Error as err:
#     #     print(f"Error: {err}")
#     #     return
#     load_dotenv(find_dotenv())

#     # Database connection
#     try:
#         conn = psycopg2.connect(
#             host=os.getenv("DB_HOST"),
#             dbname=os.getenv("DB_NAME"),
#             user=os.getenv("DB_USER"),
#             password=os.getenv("DB_PASSWORD"),
#             port=os.getenv("DB_PORT", 5432),
#         )
#         cursor = conn.cursor()
#         print("Database connection successful!")
#     except psycopg2.Error as err:
#         print(f"Error: {err}")
#         return
    
#     # CSV file path
#     current_dir = os.path.dirname(os.path.abspath(__file__))
#     csv_file_path = os.path.join(current_dir, "../data/exchange_rates.csv")

#     try:
#         # Load and process CSV
#         df = pd.read_csv(csv_file_path)
#         df = df.iloc[:, :-1]  # Drop the last column
#         print("CSV file loaded successfully!")
#         df['Date'] = pd.to_datetime(df['Date'], format='%d %B %Y').dt.date

#         # Update database
#         for _, row in df.iterrows():
#             date = row['Date']
#             for currency in df.columns[1:]:
#                 rate = row[currency]
#                 # cursor.execute(
#                 #     """
#                 #     REPLACE INTO exchange_rates (currency_code, rate, last_updated)
#                 #     VALUES (%s, %s, %s)
#                 #     """,
#                 #     (currency.strip(), rate, date)
#                 # )
#                 # Update the SQL statement in your loop
#             cursor.execute(
#                 """
#                 INSERT INTO exchange_rates (currency_code, rate, last_updated)
#                 VALUES (%s, %s, %s)
#                 ON CONFLICT (currency_code) DO UPDATE SET
#                     rate = EXCLUDED.rate,
#                     last_updated = EXCLUDED.last_updated;
#                 """,
#                 (currency.strip(), rate, date)
#             )
#         conn.commit()
#         print("Database successfully updated with exchange rates!")
#     except Exception as e:
#         print(f"Error processing CSV: {e}")
#     finally:
#         cursor.close()
#         conn.close()

# if __name__ == "__main__":
#     parse_data()



import pandas as pd
import psycopg2
# from dotenv import load_dotenv, find_dotenv
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
    # load_dotenv(find_dotenv())

    try:
        connection_string = os.getenv("DATABASE_URL")
        if not connection_string:
            raise ValueError("DATABASE_URL environment variable not set")
        conn = psycopg2.connect(connection_string)
        cursor = conn.cursor()
        print("Database connection successful!")
    except Exception as err:
        print(f"Error: {err}")
        return

    # Ensure the table exists
    create_table(cursor)

    # CSV file path
    current_dir = os.path.dirname(os.path.abspath(__file__))
    csv_file_path = os.path.join(current_dir, "../data/exchange_rates.csv")

    try:
        # Load and process CSV
        df = pd.read_csv(csv_file_path)
        df = df.iloc[:, :-1]  # Drop the last column if necessary
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
