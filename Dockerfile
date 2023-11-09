FROM node:20.9.0 as build

WORKDIR /home/ts-project

COPY . .

RUN npm install
RUN npx tsc

FROM node:20.9.0-alpine

WORKDIR /home/ts-project

COPY --from=build /home/ts-project/build .
COPY --from=build /home/ts-project/node_modules ./node_modules

CMD ["node", "index.js"]
