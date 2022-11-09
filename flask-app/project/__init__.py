import json

from flask import Flask, jsonify, request
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object("project.config.Config")
db = SQLAlchemy(app)

api = Api(app)

parser = reqparse.RequestParser()


class User(db.Model):
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(128), unique=True, nullable=False)
    active = db.Column(db.Boolean(), default=True, nullable=False)

    def __init__(self, email):
        self.email = email


class Hello(Resource):

    def get(self):
        return jsonify('Hellow World!')

    def post(self):
        parser.add_argument('email', type=str)

        email = parser.parse_args()['email']

        addUser = User(email=email)
        db.session.add(addUser)

        try:

            db.session.commit()

            return {
                "res_add_user": True,
            }
        except:
            return {
                "res_add_user": False
            }


api.add_resource(Hello, '/hello')
