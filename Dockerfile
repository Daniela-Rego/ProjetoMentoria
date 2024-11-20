FROM node:20.5.0

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install
RUN npm install bcrypt

COPY . .

##RUN npm run dev

EXPOSE 3000

RUN npx tsc
CMD ["node", "dist/server.js"]
