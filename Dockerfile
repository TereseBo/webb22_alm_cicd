FROM node:lts-alpine
WORKDIR /usr/app
COPY package*.json ./

RUN npm ci
COPY . .

ENV NODE_ENV production
EXPOSE 3000

CMD [ "node", "./bin/www" ]