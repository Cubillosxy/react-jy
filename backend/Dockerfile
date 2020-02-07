FROM python:3.7

MAINTAINER Edwin C
WORKDIR /tmp/

RUN wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz \
    && tar xvf node-v8.9.4-linux-x64.tar.xz \
    && cp -rp node-v8.9.4-linux-x64/* /usr/local/ \
    && rm -rf node-v8.9.4-linux-x64.tar.xz node-v8.9.4-linux-x64/

RUN apt-get update && apt-get install -y \
    vim \
    nano

RUN mkdir /code
WORKDIR /code
RUN easy_install -U pip
RUN pip install --upgrade pip

ADD requirements.txt /code/requirements.txt
RUN pip install -r requirements.txt