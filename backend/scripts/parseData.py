from dotenv import load_dotenv, find_dotenv
import os

# Dynamically locate and load .env file
load_dotenv(find_dotenv())

print(f"Loaded DB_HOST: {os.getenv('DB_HOST')}")

# Get database credentials from environment variables
db_host = os.getenv("DB_HOST")
db_user = os.getenv("DB_USER")
db_password = os.getenv("DB_PASSWORD")
db_name = os.getenv("DB_NAME")

print(f"DB_HOST={db_host}, DB_USER={db_user}, DB_PASSWORD={db_password}, DB_NAME={db_name}")


# # Database connection
# conn = mysql.connector.connect(
#     host=db_host,
#     user=db_user,
#     password=db_password,
#     database=db_name
# )
# cursor = conn.cursor()

# # Path to your CSV file
# csv_file_path = "path/to/your/exchange_rates.csv"  # Replace with your actual file path

# # Read the CSV file using pandas
# df = pd.read_csv(csv_file_path)

# # Convert the "Date" column to a proper datetime object
# df['Date'] = pd.to_datetime(df['Date'], format='%d %B %Y').dt.date

# # Iterate through each row and update the database
# for _, row in df.iterrows():
#     date = row['Date']  # Get the date from the "Date" column
#     for currency in df.columns[1:]:  # Skip the "Date" column
#         rate = row[currency]
#         # Insert or update the database
#         cursor.execute(
#             """
#             REPLACE INTO exchange_rates (currency_code, rate, last_updated)
#             VALUES (%s, %s, %s)
#             """,
#             (currency, rate, date)
#         )

# # Commit changes and close the connection
# conn.commit()
# conn.close()

# print("Database successfully updated with exchange rates!")
