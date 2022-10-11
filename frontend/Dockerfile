FROM node:16.0.0

WORKDIR /

EXPOSE 3000
COPY package.json ./

RUN yarn install
COPY . ./

CMD ["yarn", "build"]