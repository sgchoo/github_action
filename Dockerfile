FROM node:20-alpine

WORKDIR /docker_git-action

COPY package*.json ./

ENV NODE_ENV=dev

RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]