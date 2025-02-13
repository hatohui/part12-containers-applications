#repo setup
FROM node:20-alpine
WORKDIR /usr/src/app
COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .

#set environment variables
ENV PORT=3000
ENV MONGO_URL=mongodb://localhost:3456/the_database
ENV REDIS_URL=

#start the server
USER node
CMD ["npm", "start"]