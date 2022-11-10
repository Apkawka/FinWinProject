import json

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///analysis.db"

db.init_app(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

api = Api(app)

parser = reqparse.RequestParser()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    phone = db.Column(db.String(11), unique=True, nullable=False)

    def __repr__(self):
        return f"<phone {self.phone}>"

    def __init__(self, phone, name):
        self.phone = phone
        self.name = name


with app.app_context():
    db.create_all()


class ListUsers(Resource):

    def get(self):
        users = User.query.all()

        listUsers = []

        for i in users:
            listUsers.append({
                'name': i.name,
                'phone': i.phone
            })

        return {
            "users": listUsers
        }


api.add_resource(ListUsers, '/list-users')


class AddUser(Resource):

    def post(self):
        parser.add_argument('name', type=str)
        parser.add_argument('phone', type=str)

        name = parser.parse_args()['name']
        phone = parser.parse_args()['phone']

        addUser = User(phone=phone, name=name)
        db.session.add(addUser)

        try:
            db.session.commit()
            return {
                "status": 1,
            }
        except:
            return {
                "status": 0
            }


api.add_resource(AddUser, '/add-user')
