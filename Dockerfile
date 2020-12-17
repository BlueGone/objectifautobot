FROM node:15.4.0
WORKDIR /app
COPY package.json .
RUN npm install
COPY config.json .
COPY index.ts .
COPY tsconfig.json .
COPY src src
CMD npx ts-node index.ts
