FROM node:alpine

WORKDIR /backend

COPY ./yarn.lock ./
COPY ./package.json ./

RUN yarn

COPY . .

CMD ["yarn", "start:dev"]