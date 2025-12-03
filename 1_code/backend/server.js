import express from 'express';
import db from './database/database.js';
import { getTicketByTicketId } from './classes/ticket.js';
import { getTheaterByID } from './classes/theater.js';

const app = express();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const theater = await getTheaterByID(4);
    res.send(theater);
});

app.get('/index', async (req, res) => {
    const ticket = await getTicketByTicketId(2);
    res.send(ticket);
})