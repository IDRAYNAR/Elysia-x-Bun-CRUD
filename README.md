# Project Readme

## Architecture

- <b>Backend</b> ⤵ <br>
  The backend is written in TypeScript and uses the Elysia framework. It consists of a single entry point file src/index.ts which sets up the Elysia server and defines the routes and handlers for various endpoints. The server listens on port 3000.

- <b>Frontend</b> ⤵ <br>
  The frontend consists of an HTML file public/index.html and a JavaScript file public/script.js. The HTML file contains the basic structure of the Song Playlist webpage, while the JavaScript file handles fetching data from the backend API and updating the UI dynamically.

- <b>Database</b> ⤵ <br>
  The project uses a SQLite database to store song information. The database is initialized and accessed using the SongsDatabase class defined in src/db.ts. The database is located at database/songs.db (bun:sqlite).

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

- (The default port is 3000 : http://localhost:3000/)

- `http://localhost:3000/` ⤵ <br>
  The home page of the Song Playlist. It displays a list of all the songs in the database.
  
- `http://localhost:3000/songs` ⤵ <br>
  The songs page. It displays a list of all the songs from the database in json format.

- `http://localhost:3000/swagger` ⤵ <br>
  The API documentation page. It displays the documentation for all the API endpoints.

<hr>

## Project Structure

```js
📁 config
|__ tsconfig.json
📁 database
|__ songs.db
📁 public
├── index.html
|__ script.js
📁 src
├── db.ts
|__ index.ts
bun.lockb
package.json
```
- I put the index.html and script.js files in the public folder because these files are meant to be directly accessed by the browser.   
  The public folder is the designated location for static assets that can be accessed by the client. By placing these files in the 
  public folder, I ensure that they are readily available and can be served by the web server without any additional configuration.
  
  On the other hand, I placed the db.ts and index.ts files in the src folder. The src folder is typically used for source code files that need to be compiled or processed before they can be used by the browser. In this case, db.ts and index.ts are TypeScript files that need to be transpiled into JavaScript before they can be executed in the browser.
  
  By separating the source code files in the src folder, I can take advantage of build tools such as webpack or TypeScript compiler to compile and bundle these files into a single JavaScript file that can be included in the index.html file. This not only improves the performance of the application by reducing the number of HTTP requests but also allows me to leverage the features provided by TypeScript, such as static typing and advanced language features.
  
- In summary, by organizing the index.html and script.js files in the public folder and the db.ts and index.ts files in the src folder,
  I ensure that the necessary files are appropriately placed for direct access by the browser and for compilation and processing as part of the development workflow.
