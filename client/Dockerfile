FROM node:14.19.0-alpine

ARG env_deploy
ENV DEPLOY_INFRA=${env_deploy}

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN env

CMD ["npm", "run", "dev"]