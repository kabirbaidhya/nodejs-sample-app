# Sample Node JS App

A ridiculously simple sample project done in NodeJS.

## What do you want?

| branch  | type of the application  |
|---|---|
| [hello-world](https://github.com/kabirbaidhya/nodejs-sample-app/tree/hello-world)  | A Hello world application  |
| [starter](https://github.com/kabirbaidhya/nodejs-sample-app/tree/starter)  | A minimalistic starter template for your next NodeJS project  |
| [rest-api](https://github.com/kabirbaidhya/nodejs-sample-app/tree/rest-api)  | A sample express application exposing REST API from a postgres database.  |

Just run `git checkout <branch>` and start the app.

## Setup

Install dependencies
```bash
# Using npm
npm install

# Or using yarn
yarn
```

## Configuration

Create a `postgres` database & import the sample schema.
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

## Test your APIs

Run `npm run list:routes` to list the available API routes. 

```
$ npm run list:routes 

API Routes
----------------------------------
GET      /api/todos
POST     /api/todos
GET      /api/todos/:id
DELETE   /api/todos/:id
PUT      /api/todos/:id
----------------------------------
```

Now you can use http clients eg: [httpie](https://github.com/jkbrzt/httpie) to test your APIs:

Create a todo item:
```
$ http --json POST http://127.0.0.1:3000/api/todos title='Build a Todo App' completed=false

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 115
Content-Type: application/json; charset=utf-8
Date: Fri, 11 Nov 2016 19:24:44 GMT
ETag: W/"73-SJsR27NngqcsXB5jUHZaXw"
X-Powered-By: Express

{
    "completed": false, 
    "description": null, 
    "id": "8", 
    "recorded_at": "2016-11-11T19:24:44.710Z", 
    "title": "Build a Todo App"
}
```

Now list your todos:

```
$ http GET http://127.0.0.1:3000/api/todos

HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 117
Content-Type: application/json; charset=utf-8
Date: Fri, 11 Nov 2016 19:25:35 GMT
ETag: W/"75-ANfFIfwITLbg+u1p7PPiVA"
X-Powered-By: Express

[
    {
        "completed": false, 
        "description": null, 
        "id": "8", 
        "recorded_at": "2016-11-11T19:24:44.710Z", 
        "title": "Build a Todo App"
    }
]
```

Did you see that? Awesome. Now try the `PUT` and `DELETE` APIs as well.

## Stay tuned
We'll be building a frontend app to make use of this todo API shortly.

