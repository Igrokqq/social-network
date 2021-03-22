FROM node:14-alpine

ENV NODE_ENV development

WORKDIR /var/www/app
COPY ./frontend /var/www/app/

RUN apk --update add bash

RUN npm install --save
RUN npm run build

EXPOSE 4000

CMD ["npm", "run", "start"]
