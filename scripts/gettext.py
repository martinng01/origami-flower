import requests
from bs4 import BeautifulSoup

link = 'http://www.origami-flower.org/origami-bellflower/page-{page_num:02d}.php'
num_pages = 26

request = requests.get(link.format(page_num=2))
soup = BeautifulSoup(request.content, 'html.parser')

steps = soup.find_all(class_='table_text')

for step in steps:
  print(step.get_text(strip=True, separator='\n'))