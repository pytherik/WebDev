#!/usr/bin/env python3
# Version 0.1.0

import re
import urllib.request

class PostillionApi (object):
    def __init__(self, ticker_url='http://www.der-postillon.com/search/label/Newsticker', add_author=True):
      self.ticker_db = []
      self.ticker_url = ticker_url
      self.reload_db(add_author=add_author)
      
    def reload_db(self, add_author=True):
      author = ''
      if add_author:
        author = ' - Der Postillion'
      opener = urllib.request.FancyURLopener({})
      with opener.open(self.ticker_url) as page:
        raw_tickers = re.findall(r'\+{3,4} (.*) \+{3,4}', page.read().decode('utf-8'), re.I)
        for ticker in raw_tickers:
          ticker = re.sub('&#39;', '\'', re.sub('&quot;', '', ticker))
          self.ticker_db.append(ticker + '.' + author)
    
    def get_all_ticker(self):
      return self.ticker_db
      
if __name__ == '__main__':
  api = PostillionApi(add_author=True)
  for t in api.get_all_ticker():
    print(t)
  print(len(api.get_all_ticker()))

