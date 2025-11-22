from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from models.analytics import Analytics

analytics_bp = Blueprint('analytics', __name__)

@analytics_bp.route('/', methods=['GET'])
@jwt_required()
def get_analytics():
    # Mock data
    data = {'oneShotRate': 40, 'hallucinationRate': 5}
    return jsonify(data)