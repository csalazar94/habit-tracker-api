FROM node:18-alpine

RUN apk add --update --no-cache openssl1.1-compat

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate

CMD ["npm", "run", "start:dev"]
