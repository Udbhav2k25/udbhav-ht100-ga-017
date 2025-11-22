from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from utils.scraper import scrape_brand

research_bp = Blueprint('research', __name__)

@research_bp.route('/', methods=['POST'])
@jwt_required()
def research_brand():
    url = request.json['url']
    brand_bible = scrape_brand(url)
    return jsonify(brand_bible)