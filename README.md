# Sample Node JS App
Sample Node JS App

## Setup

Install dependencies
```bash
# Using npm
$ npm install

# Or using yarn
$ yarn
```

## Configuration

Create a database in `postgres` & import the sample database schema.
```
$ createdb YOUR_DATABASE
$ psql YOUR_DATABASE < resources/data/schema.sql
```

Create a `.env` file with your configuration.

```
$ cp .env.example .env
```

Then start the app
```
$ npm start
```

If you have `node-foreman` installed globally you can do
```
$ nf start
```

## What do you want?

| branch  | type of the application  |
|---|---|
| [hello-world](https://github.com/kabirbaidhya/nodejs-sample-app/tree/hello-world)  | A Hello world application  |
| [starter](https://github.com/kabirbaidhya/nodejs-sample-app/tree/starter)  | A minimalistic starter template for your next NodeJS project  |
| [rest-api](https://github.com/kabirbaidhya/nodejs-sample-app/tree/rest-api)  | A sample express application exposing REST API from a postgres database.  |
