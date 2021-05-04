FROM node:latest

WORKDIR /usr/app

COPY package.json .

RUN yarn

COPY . .

CMD [ "yarn", "dev" ]