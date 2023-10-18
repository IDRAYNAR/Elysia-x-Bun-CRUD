import { Elysia, t } from "elysia";
import { SongsDatabase } from "./db.js";
import { html } from '@elysiajs/html';
import { cors } from '@elysiajs/cors';
import { swagger } from '@elysiajs/swagger'

new Elysia()
    .use(html())
    .decorate("db", new SongsDatabase())

    .get("/", () => Bun.file("./public/index.html").text(),
        {
            detail: {
                summary: "Display the html page",
                description: "Display code of the html page"
            },
        })

    .get("/script.js", () => Bun.file("./public/script.js").text())

    .get("/songs", ({ db }) => db.getSongs(),
        {
            detail: {
                summary: "Get all songs in json format",
                description: "Display all songs from the database in json format."
            },
        })

    .post(
        "/songs",
        async ({ db, body }) => {
            const id = (await db.addSong(body)).id
            return { success: true, id };
        },
        {
            detail: {
                summary: "Add a song in the database",
                description: "Add a song in the database with its name and author.",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "Name of the song",
                                    },
                                    author: {
                                        type: "string",
                                        description: "Author of the song",
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
        "/songs/:id",
        ({ db, params, body }) => {
            try {
                db.updateSong(parseInt(params.id), body)
                return { success: true };
            } catch (e) {
                return { success: false };
            }
        },
        {
            detail: {
                summary: "Update a song in the database",
                description: "Update a song in the database with its id, name and author.",
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                properties: {
                                    name: {
                                        type: "string",
                                        description: "Name of the song",
                                    },
                                    author: {
                                        type: "string",
                                        description: "Author of the song",
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    )

    .delete("/songs/:id", ({ db, params }) => {
        try {
            db.deleteSong(parseInt(params.id))
            return { success: true };
        } catch (e) {
            return { success: false };
        }
    },
        {
            detail: {
                summary: "Delete a song from the database",
                description: "Delete a song from the database with its id."
            },
        }
    )

    .use(swagger({
        documentation: {
            info: {
                title: 'Song API Documentation',
                version: '1.0.0',
                description: 'All the commands for the song API are listed here, you can try them out and see the result in real time.',
            },
            externalDocs: {
                url: '/',
                description: 'Go back to the HTML interface',
            },
        },
    }))
    .use(cors())
    .listen(3000);