# from automateDownload import download_and_extract_csv
# from parseData import parse_data

# # Step 1: Download the latest CSV
# download_and_extract_csv()

# # Step 2: Parse the downloaded CSV and update the database
# parse_data()

from scripts.automateDownload import download_and_extract_csv
from scripts.parseData import parse_data

def run_daily_update():
    # Step 1: Download the latest CSV
    download_and_extract_csv()

    # Step 2: Parse the downloaded CSV and update the database
    parse_data()

if __name__ == "__main__":
    run_daily_update()
