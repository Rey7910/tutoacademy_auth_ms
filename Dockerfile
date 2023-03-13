FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./
COPY .env ./
COPY tsconfig.json ./
RUN npm install

COPY . .

EXPOSE 3002

CMD [ "npm","run", "dev" ]