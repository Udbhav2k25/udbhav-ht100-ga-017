from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required
# TODO: Integrate ML model for prediction

prediction_bp = Blueprint('prediction', __name__)

@prediction_bp.route('/predict', methods=['POST'])
@jwt_required()
def predict():
    prediction = "80% engagement predicted"
    return jsonify({'prediction': prediction})