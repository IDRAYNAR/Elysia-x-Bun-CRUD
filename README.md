# Project Readme

## Architecture

- <b>Backend</b> : The backend is written in TypeScript and uses the Elysia framework. It consists of a single entry point file src/index.ts which sets up the Elysia server and defines the routes and handlers for various endpoints. The server listens on port 3000.

- <b>Frontend</b> : The frontend consists of an HTML file public/index.html and a JavaScript file public/script.js. The HTML file contains the basic structure of the bookstore webpage, while the JavaScript file handles fetching data from the backend API and updating the UI dynamically.

- <b>Database</b> : The project uses a SQLite database to store book information. The database is initialized and accessed using the BooksDatabase class defined in src/db.ts. The database is located at database/books.db (bun:sqlite).

<hr>

## Commands

Install dependencies :

```bash
> bun install
```

If something doesn't work proprely, use this command to install the missing dependencies :

```bash
> npm install
```

Production :

```bash
> bun start
```

<hr>

## Packages

- `Elysia` A lightweight web framework for TypeScript.
- `@elysiajs/html` A package for rendering HTML templates in Elysia.
- `mongoose` A MongoDB object modeling tool.
- `bun-types` A package providing type definitions for the Bun framework.

<hr>

## Project Structure

```js
📁 config
|__ tsconfig.json
📁 database
|__ books.db
📁 public
├── css
|    ├── style.css
|    |__ style.css.map
├── index.html
|__ script.js
📁 src
├── sass
|    |__ style.sass
├── db.ts
|__ index.ts
.env
bun.lockb
package.json
```
