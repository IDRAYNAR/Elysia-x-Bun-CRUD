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
  "@elysiajs/html" is a backend package or module in the ElysiaJS framework, specifically designed for HTML rendering. It allows developers to render HTML templates and generate dynamic HTML content on the server-side. This package is useful for building web applications or generating HTML emails using the backend code.

- `@elysiajs/swagger` ⤵ <br>
  With "@elysiajs/swagger", you can annotate your ElysiaJS routes with Swagger-specific decorators and generate a Swagger specification file. This specification file describes your API endpoints, their input and output data types, and any additional metadata such as authentication requirements, response codes, and more.

- `@elysiajs/cors` ⤵ <br>
  The "@elysiajs/cors" package helps developers handle CORS-related issues in their backend applications built with ElysiaJS. It allows for configuring and managing CORS policies, such as specifying which domains are allowed to make requests to the server, handling request headers, and handling response headers. This package ensures secure and controlled access to resources from different domains while maintaining the security of the application.
  
- `mongoose` ⤵ <br>
  With Mongoose, you can define schemas that specify the structure and validation rules for your data. You can then use these schemas to create, retrieve, update, and delete data in MongoDB. Mongoose also provides a rich set of query methods and options for performing complex queries and aggregations.

- `bun-types` ⤵ <br>
  Bun Types is a package that provides a set of TypeScript types for the Bun framework. It is designed to be used with Bun.

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
