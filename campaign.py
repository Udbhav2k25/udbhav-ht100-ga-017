from models import db

class Campaign(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    copy = db.Column(db.Text)
    image_url = db.Column(db.String(200))