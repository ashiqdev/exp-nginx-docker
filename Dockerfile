

FROM node:11-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

ENV PORT=3000

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "start"]