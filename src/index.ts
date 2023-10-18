import { Elysia, t } from "elysia";
import { BooksDatabase } from "./db.js";
import { html } from '@elysiajs/html';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .use(html())
    .decorate("db", new BooksDatabase())

    .get("/", () => Bun.file("./public/index.html").text(),
        {
            detail: {
                summary: "Display the html page",
                description: "Display code of the html page"
            },
        })

    .get("/script.js", () => Bun.file("./public/script.js").text())

    .get("/books", ({ db }) => db.getBooks(),
        {
            detail: {
                summary: "Get all books in json format",
                description: "Display all books from the database in json format."
            },
        })

    .post(
        "/books",
        async ({ db, body }) => {
            const id = (await db.addBook(body)).id
            return { success: true, id };
        },
        {
            detail: {
                summary: "Add a book in the database",
                description: "Add a book in the database with its name and author.",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    //id is auto generated
                                    name: {
                                        type: "string",
                                        description: "Name of the book",
                                    },
                                    author: {
                                        type: "string",
                                        description: "Author of the book",
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    )

    .put(
        "/books/:id",
        ({ db, params, body }) => {
            try {
                db.updateBook(parseInt(params.id), body)
                return { success: true };
            } catch (e) {
                return { success: false };
            }
        },
        {
            detail: {
                summary: "Update a book in the database",
                description: "Update a book in the database with its id, name and author.",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "Name of the book",
                                    },
                                    author: {
                                        type: "string",
                                        description: "Author of the book",
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    )

    .delete("/books/:id", ({ db, params }) => {
        try {
            db.deleteBook(parseInt(params.id))
            return { success: true };
        } catch (e) {
            return { success: false };
        }
    },
        {
            detail: {
                summary: "Delete a book from the database",
                description: "Delete a book from the database with its id."
            },
        }
    )

    .use(swagger({
        documentation: {
            info: {
                title: 'Book API Documentation',
                version: '1.0.0',
                description: 'All the commands for the book API are listed here, you can try them out and see the result in real time.',
            },
            externalDocs: {
                url: '/',
                description: 'Go back to the HTML interface',
            },
        },
    }))
    .use(cors())
    .listen(3000);