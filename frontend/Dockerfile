FROM node:16.14-alpine
WORKDIR /auto-rest-front
COPY package*.json ./
RUN npm install
COPY src ./src
COPY public ./public
EXPOSE 3000
ENTRYPOINT ["npm", "run"]
CMD [ "start" ]