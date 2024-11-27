from scripts.automateDownload import download_and_extract_csv
from scripts.parseData import parse_data

def run_daily_update():
    print("Starting daily update...")
    download_and_extract_csv()  # Step 1: Download the latest CSV
    parse_data()                # Step 2: Parse and update the database
    print("Daily update completed.")

if __name__ == "__main__":
    run_daily_update()
