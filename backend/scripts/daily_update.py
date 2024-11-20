import schedule
import time
from daily_update import download_and_extract_csv, parse_data

def run_daily_update():
    download_and_extract_csv()
    parse_data()

schedule.every().monday.at("16:15").do(run_daily_update)
schedule.every().tuesday.at("16:15").do(run_daily_update)
schedule.every().wednesday.at("16:15").do(run_daily_update)
schedule.every().thursday.at("16:15").do(run_daily_update)
schedule.every().friday.at("16:15").do(run_daily_update)

while True:
    schedule.run_pending()
    time.sleep(1)
