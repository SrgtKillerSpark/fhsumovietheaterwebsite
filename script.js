// Movie object to store movie details
class Movie {
    constructor(id, title, duration, rating, genre, showTimes) {
        this.id = id;
        this.title = title;
        this.duration = duration; // in minutes
        this.rating = rating;     // e.g., "PG-13", "R", etc.
        this.genre = genre;
        this.showTimes = showTimes; // array of show times
    }
}

// Theater object to store theater room details
class Theater {
    constructor(roomNumber, capacity, screenType) {
        this.roomNumber = roomNumber;
        this.capacity = capacity;
        this.screenType = screenType; // e.g., "IMAX", "Standard", "3D"
        this.seatsAvailable = capacity;
    }
}

// Ticket object for purchasing
class Ticket {
    constructor(movieId, showTime, seatNumber, price, ticketType) {
        this.movieId = movieId;
        this.showTime = showTime;
        this.seatNumber = seatNumber;
        this.price = price;
        this.ticketType = ticketType; // e.g., "Adult", "Child", "Senior"
    }
}
// Example usage:
const SpiderMan = new Movie(
    1,
    "The Matrix",
    150,
    "R",
    "Sci-Fi",
    ["14:30", "17:00", "20:30"]
);

const theater1 = new Theater(1, 100, "Standard");

const ticket1 = new Ticket(1, "14:30", "A12", 12.99, "Adult");