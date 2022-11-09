#FROM python:3.10-alpine
#
#WORKDIR /app
#
#COPY requirements.txt requirements.txt
#
#RUN pip3 install -r requirements.txt
#
#COPY . .
#
#CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]


FROM python:3.10-alpine

# set work directory
WORKDIR /app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .