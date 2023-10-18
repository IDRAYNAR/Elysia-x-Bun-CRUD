# Project Readme

## Architecture

- <b>Backend</b> : The backend is written in TypeScript and uses the Elysia framework. It consists of a single entry point file src/index.ts which sets up the Elysia server and defines the routes and handlers for various endpoints. The server listens on port 3000.

- <b>Frontend</b> : The frontend consists of an HTML file public/index.html and a JavaScript file public/script.js. The HTML file contains the basic structure of the bookstore webpage, while the JavaScript file handles fetching data from the backend API and updating the UI dynamically.

- <b>Database</b> : The project uses a SQLite database to store book information. The database is initialized and accessed using the BooksDatabase class defined in src/db.ts. The database is located at database/books.db (bun:sqlite).

<hr>

## Commands

Install dependencies :

```bash
bun install
```

If something doesn't work proprely, use this command to install the missing dependencies :

```bash
npm install
```

Production :

```bash
bun start
```

<hr>

## Packages

- `Elysia` ⤵ <br>
  ElysiaJS provides a powerful JavaScript framework specifically designed for backend development. It offers a modular and flexible approach, making it easier to manage common tasks such as authentication, database management, HTTP requests, file handling, and more. Additionally, it includes advanced features such as websocket support, event handling, caching, task scheduling, and much more. ElysiaJS is also known for its ease of use and active community, making it easier to share knowledge and troubleshoot issues.

- `@elysiajs/html` ⤵ <br>
  ElysiaJS HTML is a package that provides a simple and easy to use API for generating HTML documents. It is designed to be used with ElysiaJS, but can also be used as a standalone package.

- `@elysiajs/swagger` ⤵ <br>
  ElysiaJS Swagger is a package that provides a simple and easy to use API for generating Swagger documentation. It is designed to be used with ElysiaJS, but can also be used as a standalone package.

- `@elysiajs/cors` ⤵ <br>
  ElysiaJS CORS is a package that provides a simple and easy to use API for enabling CORS in your ElysiaJS application. It is designed to be used with ElysiaJS, but can also be used as a standalone package.
  
- `mongoose` ⤵ <br>
  Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. It provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

- `bun-types` ⤵ <br>
  Bun Types is a package that provides a set of TypeScript types for the Bun framework. It is designed to be used with Bun, but can also be used as a standalone package.

<hr>

## Pages

- `/` : The home page of the bookstore. It displays a list of all the books in the database.
- `/books` : The books page. It displays a list of all the books from the database in json format.
- `/swagger` : The API documentation page. It displays the documentation for all the API endpoints.

<hr>

## Project Structure

```js
📁 config
|__ tsconfig.json
📁 database
|__ books.db
📁 public
├── index.html
|__ script.js
📁 src
├── db.ts
|__ index.ts
.env
bun.lockb
package.json
```
