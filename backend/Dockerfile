FROM node:16.14-alpine
WORKDIR /auto-rest-back
COPY package*.joson ./
RUN npm install
COPY src src
EXPOSE 3001
ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]