export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        password: "1234",
        tickets: [101, 102],
        memberSince: "1/23/2025",
        favoriteMovie: 1,
        role: "user"
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice@example.com",
        password: "pass123",
        tickets: [201],
        memberSince: "2/21/2025",
        favoriteMovie: 2,
        role: "user"
    },
    {
        id: 100,
        name: "Admin",
        email: "admin@fhsu.edu",
        password: "admin123",
        role: "admin"
    }
];

export const admins = [
    {
        id: 100,
        name: "Admin",
        email: "admin@fhsu.edu",
        password: "admin123",
        role: "admin"
    }
];

// --- Tickets Table ---
export const tickets = [
    {
        id: 101,
        movieId: 1,
        date: "2025-12-01",
        time: "7:00 PM",
        seats: ["C5", "C6"],
        purchaseDate: "2025-11-28"
    },
    {
        id: 102,
        movieId: 2,
        date: "2025-12-03",
        time: "9:15 PM",
        seats: ["B2"],
        purchaseDate: "2025-11-22"
    },
    {
        id: 201,
        movieId: 1,
        date: "2025-12-10",
        time: "6:45 PM",
        seats: ["A1", "A2"],
        purchaseDate: "2025-12-01"
    }
];

// --- Movies Table ---
export const movies = [
    { id: 1, title: "Tron: Ares",  rating: "PG-13", runtimeMins: 125, poster: "images/tronares.jpg" },
    { id: 2, title: "Black Phone 2", rating: "R",    runtimeMins: 101, poster: "images/blackphone2.jpg" },
    { id: 3, title: "Good Fortune",  rating: "PG-13", runtimeMins: 112, poster: "images/goodfortune.jpg" },
    { id: 4, title: "Springsteen: Deliver Me From Nowhere", rating: "PG-13", runtimeMins: 120, poster: "images/springsteen.jpg" }
];

// --- Showings Table---
export const showings = [
  // Tron: Ares (movieId 1)
  { id: 101, movieId: 1, start: "2025-12-01T13:00:00", auditorium: "A" }, // 1:00 PM
  { id: 102, movieId: 1, start: "2025-12-01T16:15:00", auditorium: "A" }, // 4:15 PM
  { id: 103, movieId: 1, start: "2025-12-01T19:30:00", auditorium: "A" }, // 7:30 PM
  { id: 104, movieId: 1, start: "2025-12-01T21:45:00", auditorium: "A" }, // 9:45 PM
  // Black Phone 2 (movieId 2)
  { id: 201, movieId: 2, start: "2025-12-01T13:00:00", auditorium: "B" }, // 1:00 PM
  { id: 202, movieId: 2, start: "2025-12-01T16:15:00", auditorium: "B" }, // 4:15 PM
  { id: 203, movieId: 2, start: "2025-12-01T19:30:00", auditorium: "B" }, // 7:30 PM
  { id: 204, movieId: 2, start: "2025-12-01T21:45:00", auditorium: "B" }, // 9:45 PM
  // Good Fortune (movieId 3)
  { id: 301, movieId: 3, start: "2025-12-01T13:00:00", auditorium: "C" }, // 1:00 PM
  { id: 302, movieId: 3, start: "2025-12-01T16:15:00", auditorium: "C" }, // 4:15 PM
  { id: 303, movieId: 3, start: "2025-12-01T19:30:00", auditorium: "C" }, // 7:30 PM
  { id: 304, movieId: 3, start: "2025-12-01T21:45:00", auditorium: "C" }, // 9:45 PM
  // Springsteen (movieId 4)
  { id: 401, movieId: 4, start: "2025-12-01T13:00:00", auditorium: "D" }, // 1:00 PM
  { id: 402, movieId: 4, start: "2025-12-01T16:15:00", auditorium: "D" }, // 4:15 PM
  { id: 403, movieId: 4, start: "2025-12-01T19:30:00", auditorium: "D" }, // 7:30 PM
  { id: 404, movieId: 4, start: "2025-12-01T21:45:00", auditorium: "D" }, // 9:45 PM
];

// --- Minimal read helpers ---
export function getMovie(id) {
  return movies.find(m => m.id === Number(id));
}
export function getShowing(id) {
  return showings.find(s => s.id === Number(id));
}
export function getShowingsForMovie(movieId) {
  return showings.filter(s => s.movieId === Number(movieId));
}