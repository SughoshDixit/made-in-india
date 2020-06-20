FROM python:3.8.2
ENV PYTHONUNBUFFERED 1
ENV HOME=/usr/src/backend
RUN mkdir -p $HOME
WORKDIR $HOME
ADD requirements.txt $HOME
RUN pip install -r requirements.txt
ADD . $HOME
RUN ls -r