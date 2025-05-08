FROM node:22.15.0

WORKDIR /todo-app

#COPY package.json
#COPY package-lock.json
#docker build -t todo-app .
#docker run -p 3000:3000 todo-app

COPY package*.json ./

RUN npm install

COPY . .
ENV DB_HOST=roberto-todo.cbuucgiqsve2.us-west-2.rds.amazonaws.com
ENV DB_USER=postgres
ENV DB_PASSWORD=Password.123
ENV DB_DATABASE=todo
ENV DB_PORT=5432
EXPOSE 3000

CMD ["node", "src/index.js"]