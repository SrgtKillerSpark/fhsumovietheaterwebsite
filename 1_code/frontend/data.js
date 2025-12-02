export const users = [
    {
        id: 1,
        name: "John Doe",
        email: "John@example.com",
        password: "1234", // (not secure, but fine for front-end only)
        tickets: [101, 102] // references ticket IDs
    },
    {
        id: 2,
        name: "Alice Smith",
        email: "alice@example.com",
        password: "pass123",
        tickets: []
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
    }
];

// --- Movies Table ---
export const movies = [
    { id: 1, title: "Tron: Ares" },
    { id: 2, title: "Black Phone 2" },
    { id: 3, title: "Good Fortune" }
];