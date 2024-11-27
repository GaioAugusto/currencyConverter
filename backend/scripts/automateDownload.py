import requests
import zipfile
import os
from io import BytesIO
import logging

# Configure logging
logging.basicConfig(
    filename="fetch_csv.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s",
)

ECB_ZIP_URL = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref.zip"
current_dir = os.path.dirname(os.path.abspath(__file__))
csv_dir = os.path.join(current_dir, "../data")
csv_file_path = os.path.join(csv_dir, "exchange_rates.csv")
os.makedirs(csv_dir, exist_ok=True)

def download_and_extract_csv():
    try:
        response = requests.get(ECB_ZIP_URL)
        if response.status_code == 200:
            logging.info("ZIP file downloaded successfully!")
            with zipfile.ZipFile(BytesIO(response.content)) as z:
                for file in z.namelist():
                    if file.endswith('.csv'):
                        z.extract(file, csv_dir)
                        extracted_csv_path = os.path.join(csv_dir, file)
                        os.rename(extracted_csv_path, csv_file_path)
                        logging.info(f"CSV extracted to {csv_file_path}")
                        return
                logging.error("No CSV file found in the ZIP archive.")
        else:
            logging.error(f"Failed to download ZIP. Status code: {response.status_code}")
    except Exception as e:
        logging.error(f"Error during download or extraction: {e}")