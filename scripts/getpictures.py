import requests

link = 'http://www.origami-flower.org/origami-bellflower/Images/origami-bellflower-{step:02d}.jpg'
num_steps = 49

for i in range(1, num_steps + 1):
    url = link.format(step=i)
    response = requests.get(url)
    with open('scripts/temp/origami-bellflower-{step:02d}.jpg'.format(step=i), 'wb') as f:
        f.write(response.content)