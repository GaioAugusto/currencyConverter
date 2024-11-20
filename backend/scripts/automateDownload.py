import requests
import zipfile
import os
from io import BytesIO
import logging

# Configure logging
logging.basicConfig(filename="fetch_csv.log", level=logging.INFO,
                    format="%(asctime)s - %(levelname)s - %(message)s")

# ECB ZIP file URL
ECB_ZIP_URL = "https://www.ecb.europa.eu/stats/eurofxref/eurofxref.zip"

# Path to save the extracted CSV file
current_dir = os.path.dirname(os.path.abspath(__file__))
csv_dir = os.path.join(current_dir, "../data")  # Save in the data folder
csv_file_path = os.path.join(csv_dir, "exchange_rates.csv")

# Ensure the directory exists
os.makedirs(csv_dir, exist_ok=True)

def download_and_extract_csv():
    try:
        # Step 1: Download the ZIP file
        response = requests.get(ECB_ZIP_URL)
        if response.status_code == 200:
            logging.info("ZIP file downloaded successfully!")
            print("ZIP file downloaded successfully!")
            
            # Step 2: Extract the CSV file from the ZIP archive
            with zipfile.ZipFile(BytesIO(response.content)) as z:
                # List files in the ZIP archive
                zip_contents = z.namelist()
                print(f"Files in ZIP: {zip_contents}")
                
                # Find the CSV file (assuming it's the first file in the archive)
                for file in zip_contents:
                    if file.endswith('.csv'):
                        z.extract(file, csv_dir)
                        extracted_csv_path = os.path.join(csv_dir, file)
                        
                        # Rename the extracted CSV file to a standard name
                        os.rename(extracted_csv_path, csv_file_path)
                        logging.info(f"CSV file extracted and saved as: {csv_file_path}")
                        print(f"CSV file extracted and saved as: {csv_file_path}")
                        return
                logging.error("No CSV file found in the ZIP archive!")
                print("No CSV file found in the ZIP archive!")
        else:
            logging.error(f"Failed to download ZIP. Status code: {response.status_code}")
            print(f"Failed to download ZIP. Status code: {response.status_code}")
    except Exception as e:
        logging.error(f"Error while processing ZIP file: {e}")
        print(f"Error while processing ZIP file: {e}")

if __name__ == "__main__":
    download_and_extract_csv()
