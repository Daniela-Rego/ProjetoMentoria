FROM node:20.5.0

WORKDIR /usr/src/app

COPY package*.json ./

# Instala o TypeScript e o ts-node globalmente, além das dependências do projeto
RUN npm install

RUN npm install -g typescript

RUN npm install -g ts-node@10.9.2


COPY . .

# Compila os arquivos TypeScript para JavaScript
RUN npx tsc

EXPOSE 3000

CMD ["npm", "run", "start"]
