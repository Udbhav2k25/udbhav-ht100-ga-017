from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
# TODO: Integrate Buffer API for scheduling

scheduling_bp = Blueprint('scheduling', __name__)

@scheduling_bp.route('/connect', methods=['POST'])
@jwt_required()
def connect_account():
    platform = request.json['platform']
    # TODO: OAuth flow
    return jsonify({'message': f'{platform} connected'})

@scheduling_bp.route('/schedule', methods=['POST'])
@jwt_required()
def schedule_post():
    # TODO: Schedule via API
    return jsonify({'message': 'Post scheduled'})