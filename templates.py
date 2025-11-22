from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

templates_bp = Blueprint('templates', __name__)

@templates_bp.route('/', methods=['GET'])
@jwt_required()
def get_templates():
    # Mock templates
    templates = [{'id': 1, 'name': 'Eco Awareness'}]
    return jsonify(templates)