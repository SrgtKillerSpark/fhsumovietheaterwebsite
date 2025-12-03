export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        password: "1234",
        tickets: [101, 102],
        memberSince: "1/23/2025",
        favoriteMovie: 1
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice@example.com",
        password: "pass123",
        tickets: [201],
        memberSince: "2/21/2025",
        favoriteMovie: 2
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
  { id: 101, movieId: 1, start: "2025-12-01T17:00:00", auditorium: "A" },
  { id: 102, movieId: 1, start: "2025-12-01T20:00:00", auditorium: "A" },
  // Black Phone 2 (movieId 2)
  { id: 201, movieId: 2, start: "2025-12-01T18:30:00", auditorium: "B" },
  // Good Fortune (movieId 3)
  { id: 301, movieId: 3, start: "2025-12-01T19:00:00", auditorium: "C" },
  // Springsteen (movieId 4)
  { id: 401, movieId: 4, start: "2025-12-01T16:15:00", auditorium: "D" }
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