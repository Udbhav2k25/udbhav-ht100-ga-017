from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required

settings_bp = Blueprint('settings', __name__)

@settings_bp.route('/update', methods=['POST'])
@jwt_required()
def update_settings():
    # TODO: Save to DB
    return jsonify({'message': 'Settings updated'})