FROM node:14

#Initializing the work directory
WORKDIR /nodejs/app

#Copy and Run command

COPY package*.json ./
RUN npm install

COPY . .
CMD [ "node", "index.js" ]