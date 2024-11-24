from automateDownload import download_and_extract_csv
from parseData import parse_data

# Step 1: Download the latest CSV
download_and_extract_csv()

# Step 2: Parse the downloaded CSV and update the database
parse_data()
