FROM node:14
ARG MONGODB_URI
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
ENV MONGODB_URI=$MONGODB_URI
RUN npm run buildprod
EXPOSE 3000
CMD [ "npm", "start" ]
