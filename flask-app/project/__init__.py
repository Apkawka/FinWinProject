import json

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import ForeignKey, Integer, Column
from sqlalchemy.orm import relationship

from ml.test_model import cheeeck


db = SQLAlchemy()

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///analysis.db"

db.init_app(app)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

api = Api(app)

parser = reqparse.RequestParser()


class User(db.Model):
    __tablename__ = "user"

    id = Column(db.Integer, primary_key=True)
    name = Column(db.String(128), nullable=False)
    phone = Column(db.String(11), unique=True, nullable=False)
    uid = Column(db.String(10), unique=True, nullable=False)

    usersForTransfers = relationship("UsersForTransfers", backref='user')

    # usersForTransfersId = Column(Integer, ForeignKey('UsersForTransfers.id'))
    # usersForTransfers = relationship("UsersForTransfers")

    def __repr__(self):
        return f"<phone {self.phone}>"

    def __init__(self, phone, name, uid):
        self.phone = phone
        self.name = name
        self.uid = uid


class UsersForTransfers(db.Model):
    __tablename__ = "UsersForTransfers"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(128), nullable=False)
    phone = db.Column(db.String(11), unique=True, nullable=False)
    uid = db.Column(db.String(10), unique=True, nullable=False)

    user_id = db.Column(Integer, ForeignKey('user.id'))

    def __repr__(self):
        return f"<phone {self.phone}>"

    def __init__(self, phone, name, uid, user_id):
        self.phone = phone
        self.name = name
        self.uid = uid
        self.user_id = user_id


with app.app_context():
    db.create_all()


class ListUsers(Resource):

    def get(self):

        users = User.query.all()

        listUsers = []

        for i in users:
            listUsers.append({
                'name': i.name,
                'phone': i.phone,
                'uid': i.uid
            })

        return {
            "users": listUsers,
            "test_iml": cheeeck(265865)
        }


api.add_resource(ListUsers, '/list-users')


class AddUser(Resource):

    def post(self):
        parser.add_argument('name', type=str)
        parser.add_argument('phone', type=str)
        parser.add_argument('uid', type=str)

        name = parser.parse_args()['name']
        phone = parser.parse_args()['phone']
        uid = parser.parse_args()['uid']

        addUser = User(phone=phone, name=name, uid=uid)
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


class AddUsersForTransfers(Resource):

    def post(self):
        parser.add_argument('name', type=str)
        parser.add_argument('phone', type=str)
        parser.add_argument('uid', type=str)
        parser.add_argument('users', type=str)

        name = parser.parse_args()['name']
        phone = parser.parse_args()['phone']
        uid = parser.parse_args()['uid']
        user = parser.parse_args()['users']

        users = []

        for i in user:
            usersForTransfer = User.query.get(i)
            users.append(usersForTransfer)

        addUsersForTransfer = UsersForTransfers(phone=phone, name=name, uid=uid, user_id=user)
        db.session.add(addUsersForTransfer)

        try:
            db.session.commit()
            return {
                "status": 1,
            }
        except:
            return {
                "status": 0
            }


api.add_resource(AddUsersForTransfers, '/add-users-for-transfers')
