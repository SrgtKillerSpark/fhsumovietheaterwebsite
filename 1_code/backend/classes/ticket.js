import db from '../database/database.js';

export class Ticket {
    id;
    showingId;
    showing;
    seat;
    type;
    price;
    order_id;

    constructor(ticketId, ticketShowingId, ticketSeat, ticketType, ticketPrice, ticketOrderId) {
        this.id = ticketId;
        this.showingId = ticketShowingId;
        this.seat = ticketSeat;
        this.type = ticketType;
        this.price = ticketPrice;
        this.order_id = ticketOrderId;
    }
}

export default async function getTicketByShowingIdAndSeat(showingId, seat) {
    const ticket = await db.query('SELECT * FROM ticket WHERE showing_id = ? AND seat = ?', [showingId, seat]);
    if(ticket[0] != 0){
        return new Ticket(ticket[0][0].ticket_id, ticket[0][0].showing_id, ticket[0][0].seat, ticket[0][0].type, ticket[0][0].price, ticket[0][0].order_id);
    }
    else{
        return 'No Results';
    }
}

export async function getTicketByTicketId(ticketId) {
    const ticket = await db.query('SELECT * FROM ticket WHERE ticket_id = ?', [ticketId]);
    
    if(ticket[0] != 0){
        return new Ticket(ticket[0][0].ticket_id, ticket[0][0].showing_id, ticket[0][0].seat, ticket[0][0].type, ticket[0][0].price, ticket[0][0].order_id);
    }
    else{
        return 'No Results';
    }
}