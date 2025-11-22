from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from routes.auth import auth_bp
from routes.campaigns import campaigns_bp
from routes.analytics import analytics_bp
from routes.templates import templates_bp
from routes.scheduling import scheduling_bp
from routes.prediction import prediction_bp
from routes.settings import settings_bp
from routes.research import research_bp
from models import db

app = Flask(__name__)
app.config.from_object(Config)
CORS(app)
JWTManager(app)
db.init_app(app)

app.register_blueprint(auth_bp, url_prefix='/api/auth')
app.register_blueprint(campaigns_bp, url_prefix='/api/campaigns')
app.register_blueprint(analytics_bp, url_prefix='/api/analytics')
app.register_blueprint(templates_bp, url_prefix='/api/templates')
app.register_blueprint(scheduling_bp, url_prefix='/api/scheduling')
app.register_blueprint(prediction_bp, url_prefix='/api/prediction')
app.register_blueprint(settings_bp, url_prefix='/api/settings')
app.register_blueprint(research_bp, url_prefix='/api/research')

if __name__ == '__main__':
    app.run(debug=True)