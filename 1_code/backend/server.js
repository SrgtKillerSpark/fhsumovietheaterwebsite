import express from 'express';
import db from './database/database.js';
import getTheaterByNumber from './classes/theater.js';
import { getTheaterByID } from './classes/theater.js';
import { getTheaterByName } from './classes/theater.js';

const app = express();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const data = await getTheaterByNumber(2);
    res.send(data);
});