import db from '../database/database.js';

export class Theater {

    // Properties
    id; // Assigned in database and automatically increments.
    number; // Theater Number
    name; // Name of theater
    numSeats; // Number of seats in the theater
    assignedSeats;
    screenType; // e.g., "IMAX", "Standard", "3D"
    seatingLayout; // seating_25 or seating_50

    constructor(theaterId, theaterNumber, theaterName, areSeatsAssigned, numberOfSeats, typeOfScreen, seating_layout) {
        this.id = theaterId;
        this.number = theaterNumber;
        this.name = theaterName;
        this.assignedSeats = areSeatsAssigned;
        this.numSeats = numberOfSeats;
        this.screenType = typeOfScreen;
        this.seatingLayout = seating_layout;
    }

    setID(theaterId) {
        this.id = theaterId;
    }

    setNumber(theaterNumber){
        this.number = theaterNumber;
    }

    setName(theaterName) {
        this.name = theaterName;
    }

    setAssignedSeats(assigned) {
        this.assignedSeats = assigned;
    }

    setNumSeats(numberOfSeats) {
        this.numSeats = numberOfSeats;
    }

    setScreenType(type) {
        this.screenType = type;
    }

    setSeatingLayout(seating_layout) {
        this.seatingLayout = seating_layout;
    }
}

export async function getTheaterByID(theaterId) {
    const theater = await db.query('SELECT * FROM theater WHERE theater_id = ?', [theaterId]);
    return new Theater(theater[0][0].theater_id, theater[0][0].number, theater[0][0].name, theater[0][0].assigned_seats, theater[0][0].number_of_seats,theater[0][0].type, theater[0][0].seating_layout);
}

export default async function getTheaterByNumber(theaterNumber) {
    const theater = await db.query('SELECT * FROM theater WHERE number = ?', [theaterNumber]);
    return new Theater(theater[0][0].theater_id, theater[0][0].number, theater[0][0].name, theater[0][0].assigned_seats, theater[0][0].number_of_seats,theater[0][0].type, theater[0][0].seating_layout);
}

//theaterName must be passed in single quotes
export async function getTheaterByName(theaterName) {
    const theater = await db.query('SELECT * FROM theater WHERE name = ?', [theaterName]);
    return new Theater(theater[0][0].theater_id, theater[0][0].number, theater[0][0].name, theater[0][0].assigned_seats, theater[0][0].number_of_seats,theater[0][0].type, theater[0][0].seating_layout);
}