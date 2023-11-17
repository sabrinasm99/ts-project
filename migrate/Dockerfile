FROM node:20.9.0-alpine

WORKDIR /home/migrations

COPY . .

RUN npm init -y

RUN npm i ts-node -D

RUN npm i pg

RUN npm install knex

CMD ["echo", "Alpin Kelola"]