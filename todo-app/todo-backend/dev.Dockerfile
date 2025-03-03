FROM node:20
WORKDIR /usr/src/app
COPY ./package.json .
RUN npm i
CMD ["npm","run","dev","--","--host"]


