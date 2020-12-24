FROM node:15.5.0 as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY tsconfig.json .
COPY src src
RUN npm run build

FROM node:15.5.0 as run
WORKDIR /app
COPY package.json .
RUN npm install --prod
COPY --from=build /app/dist dist
CMD npm run start
