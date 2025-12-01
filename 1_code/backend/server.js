import express from 'express';
import db from './database/database.js';

const app = express();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const data = await db.query('SELECT name, seats, type FROM theater WHERE theater_id = ?', [1]);
    res.send(data[0]);
});