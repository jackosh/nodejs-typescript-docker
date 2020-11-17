FROM node:12-alpine

WORKDIR /app

COPY --chown=node:node package.json /app/package.json
COPY --chown=node:node tsconfig.json /app/tsconfig.json

# COPY --chown=node:node package.json /app/package.json

# COPY --chown=node:node package-lock.json /app/package.json

## install required packages before npm
# RUN apk --no-cache add --virtual builds-deps build-base python
RUN ls -al

RUN npm install

COPY --chown=node:node . /app
RUN mkdir /app/dist
RUN chown node:node /app/dist

RUN ls -al /app

EXPOSE 8080

## define user just at the end
USER node  

CMD ["npm", "start"]
# CMD ["npm", "run", "compile"]
RUN ls -al /app/dist
