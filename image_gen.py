import requests
from config import Config

def generate_image(prompt, brand_bible):
    # TODO: Integrate Flux.1 API
    response = requests.post('https://api.flux1.com/generate', json={'prompt': prompt, 'api_key': Config.FLUX_API_KEY})
    return response.json()['image_url']