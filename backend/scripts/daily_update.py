import schedule
import time
from daily_update import download_and_extract_csv, parse_data

def run_daily_update():
    # Call your functions to download and parse the data
    download_and_extract_csv()
    parse_data()

# Schedule the task
schedule.every().monday.at("16:15").do(run_daily_update)
schedule.every().tuesday.at("16:15").do(run_daily_update)
schedule.every().wednesday.at("16:15").do(run_daily_update)
schedule.every().thursday.at("16:15").do(run_daily_update)
schedule.every().friday.at("16:15").do(run_daily_update)

# Keep the script running
while True:
    schedule.run_pending()
    time.sleep(1)
