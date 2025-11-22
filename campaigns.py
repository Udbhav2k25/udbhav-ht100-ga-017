from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
from utils.langgraph_agent import run_agent_loop
from utils.image_gen import generate_image
from models.campaign import Campaign
from models import db
import socketio

campaigns_bp = Blueprint('campaigns', __name__)
sio = socketio.Client()
sio.connect('http://localhost:4000')

@campaigns_bp.route('/strategy', methods=['POST'])
@jwt_required()
def get_strategy():
    data = request.json
    # TODO: Use LLM to generate angles based on brand_bible
    angles = ["Emotional", "Logical", "FOMO"]
    return jsonify({'angles': angles})

@campaigns_bp.route('/create', methods=['POST'])
@jwt_required()
def create_campaign():
    data = request.json
    sio.emit('progress', {'progress': 25})
    # TODO: Integrate LangGraph for loop
    copy = "Generated copy based on " + data['angle']
    image_url = generate_image(data['angle'], data['brandBible'])
    sio.emit('progress', {'progress': 100})
    campaign = Campaign(user_id=1, copy=copy, image_url=image_url)  # Mock user_id
    db.session.add(campaign)
    db.session.commit()
    return jsonify({'copy': copy, 'imageUrl': image_url})

@campaigns_bp.route('/regenerate', methods=['POST'])
@jwt_required()
def regenerate():
    data = request.json
    # TODO: Regenerate with tweaks
    new_copy = data['draft']['copy'] + " (regenerated)"
    return jsonify({'copy': new_copy, 'imageUrl': data['draft']['imageUrl']})

@campaigns_bp.route('/inpainting', methods=['POST'])
@jwt_required()
def inpaint():
    # TODO: Use ControlNet for product placement
    images = ["resized1.jpg", "resized2.jpg"]
    return jsonify({'images': images})

@campaigns_bp.route('/resize', methods=['POST'])
@jwt_required()
def resize():
    # TODO: Use Pillow for resizing
    resized = ["ig.jpg", "linkedin.jpg"]
    return jsonify({'images': resized})

@campaigns_bp.route('/simulate', methods=['POST'])
@jwt_required()
def simulate():
    # TODO: LangGraph for persona chat
    log = "Customer: Too expensive. Marketer: Revised to affordable."
    return jsonify({'log': log})

@campaigns_bp.route('/counter', methods=['POST'])
@jwt_required()
def counter():
    # TODO: Scrape and analyze competitor
    ad = "Our product is eco-friendly, unlike theirs."
    return jsonify({'ad': ad})