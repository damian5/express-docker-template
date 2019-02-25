## Express Docker template

This project is a simple template with [express](https://github.com/expressjs/express) and [Docker](https://github.com/docker/compose).

## Getting started

```
git clone https://github.com/damian5/express-docker-template.git docker-express
cd docker-express
npm install
```

```
Create a new .env file with the .env.example content
```

## To setup the docker image

- Build the Docker image

  ```
  docker build -t express-docker .
  ```

- Run the image

  ```
  docker-compose up
  ```

Then open `http://localhost:8080` to see your app

## To stop the container

- Run `docker-compose down`

## Structure overview
```
├── README.md
├── src
│   ├── index.js
├── docker-compose
├── package.json
├── Dockerfile
├── dockerignore
├── index.js
└── package-lock.json