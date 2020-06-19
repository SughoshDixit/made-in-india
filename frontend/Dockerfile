FROM node:10.19.0-alpine

ENV HOME=/usr/src/app
RUN mkdir -p $HOME


WORKDIR $HOME/frontend
COPY package.json yarn.lock $HOME/frontend/
RUN yarn
ADD . $HOME/frontend/
RUN ls
RUN yarn generate