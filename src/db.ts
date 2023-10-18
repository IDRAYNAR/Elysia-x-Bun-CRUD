import { Database } from 'bun:sqlite';

export interface Song {
    id?: number;
    name: string;
    author: string;
}

export class SongsDatabase {
    private db: Database;

    constructor() {
        this.db = new Database('./database/songs.db');
        // Initialize the database
        this.init()
            .then(() => console.log('Database initialized'))
            .catch(console.error);
    }

    // Get all songs
    async getSongs() {
        return this.db.query('SELECT * FROM songs').all();
    }

    // Add a song
    async addSong(song: Song) {
        // q: Get id type safely 
        return this.db.query(`INSERT INTO songs (name, author) VALUES (?, ?) RETURNING id`).get(song.name, song.author) as Song;
    }

    // Update a song
    async updateSong(id: number, song: Song) {
        return this.db.run(`UPDATE songs SET name = '${song.name}', author = '${song.author}' WHERE id = ${id}`)
    }

    // Delete a song
    async deleteSong(id: number) {
        return this.db.run(`DELETE FROM songs WHERE id = ${id}`)
    }

    // Initialize the database
    async init() {
        return this.db.run('CREATE TABLE IF NOT EXISTS songs (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT)');
    }
}