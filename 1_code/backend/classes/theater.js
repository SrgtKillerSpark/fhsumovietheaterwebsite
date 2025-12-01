import db from '../database/database.js';

class Theater {

    // Properties
    id;// Assigned in database and automatically increments.
    name;
    assignedSeats;
    numSeats;
    seat;
    screenType; // e.g., "IMAX", "Standard", "3D"

    constructor(theaterId, theaterName, areSeatsAssigned, numberOfSeats, typeOfScreen) {
        this.id = theaterId;
        this.name = theaterName;
        this.assignedSeats = areSeatsAssigned;
        this.numSeats = numberOfSeats;
        this.screenType = typeOfScreen;
    }

    setID(theaterId) {
        this.id = theaterId;
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
}

export default async function getTheaterByID(theaterId) {
    const theater = await db.query('SELECT * FROM theater WHERE theater_id = ?', [theaterId]);
    return new Theater(theater[0][0].theater_id, theater[0][0].name, theater[0][0].assigned_seats, theater[0][0].number_of_seats,theater[0][0].type);
}

//theaterName must be passed in single quotes
export async function getTheaterByName(theaterName) {
    const theater = await db.query('SELECT * FROM theater WHERE name = ?', [theaterName]);
    return new Theater(theater[0][0].theater_id, theater[0][0].name, theater[0][0].assigned_seats, theater[0][0].number_of_seats,theater[0][0].type);
}