import express from 'express';
import db from './database/database.js';
import { getTicketByTicketId } from './classes/ticket.js';

const app = express();

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});

app.get('/', async (req, res) => {
    const ticket = await getTicketByTicketId(1);
    res.send(ticket);
});