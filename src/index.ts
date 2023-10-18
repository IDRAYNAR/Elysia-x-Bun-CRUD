import { Elysia, t } from "elysia";
import { BooksDatabase } from "./db.js";
import { html } from '@elysiajs/html'

new Elysia()
    .use(html())
    .decorate("db", new BooksDatabase())
    .get("/", () => Bun.file("./public/index.html").text())
    .get("/script.js", () => Bun.file("./public/script.js").text())
    .get("/books", ({ db }) => db.getBooks())
    .post(
        "/books",
        async ({ db, body }) => {
            const id = (await db.addBook(body)).id
            return { success: true, id };
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
        }
    )
    .delete("/books/:id", ({ db, params }) => {
        try {
            db.deleteBook(parseInt(params.id))
            return { success: true };
        } catch (e) {
            return { success: false };
        }
    })
    .listen(3000);