FROM node:12-alpine

WORKDIR /home/node/app

COPY --chown=node:node package.json /home/node/app/package.json
COPY --chown=node:node tsconfig.json /home/node/app/tsconfig.json

# COPY --chown=node:node package.json /app/package.json

# COPY --chown=node:node package-lock.json /app/package.json

## install required packages before npm
# RUN apk --no-cache add --virtual builds-deps build-base python
RUN ls -al

RUN npm install

COPY --chown=node:node . /home/node/app
# RUN mkdir /app/dist
# RUN chown node:node /app/dist

RUN ls -al /home/node/app

EXPOSE 8080

## define user just at the end
USER node  

CMD ["npm", "start"]
# CMD ["npm", "run", "compile"]
RUN ls -al /app/dist
