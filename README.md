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