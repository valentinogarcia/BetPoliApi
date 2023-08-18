from node:18

WORKDIR /usr/src/app/

COPY ./api/package*.json ./

RUN npm install

COPY ./api/ . 

EXPOSE 3000

CMD ["npx","nodemon","index.ts"]
