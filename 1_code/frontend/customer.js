import { users, tickets, movies } from "./data.js";

// HTML elements
const loginView = document.getElementById("loginView");
const accountView = document.getElementById("accountView");
const loginForm = document.getElementById("loginForm");
const accountName = document.getElementById("accountName");
const ticketHistory = document.getElementById("ticketHistory");
const logoutBtn = document.getElementById("logoutBtn");
const registerView = document.getElementById("registerView");
const registerForm = document.getElementById("registerForm");
const showRegisterBtn = document.getElementById("showRegisterBtn");
const backToLoginBtn = document.getElementById("backToLoginBtn");
const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profileSince = document.getElementById("profileSince");
const favoriteMovieText = document.getElementById("favoriteMovieText");
const favoriteSelect = document.getElementById("favoriteSelect");
const saveFavoriteBtn = document.getElementById("saveFavoriteBtn");
let loggedInUser = null;

// --- Login Handler ---
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (!user) {
        alert("Invalid email or password");
        return;
    }

    loggedInUser = user;

    loginView.hidden = true;
    accountView.hidden = false;

    accountName.textContent = user.name;
    profileName.textContent = user.name;
    profileEmail.textContent = user.email;
    profileSince.textContent = user.memberSince;

    // Show current favorite movie text
    if (user.favoriteMovie) {
        const movie = movies.find(m => m.id === user.favoriteMovie);
        favoriteMovieText.textContent = movie ? movie.title : "None selected";
    } else {
        favoriteMovieText.textContent = "None selected";
    }

    // ⭐ Populate dropdown
    favoriteSelect.innerHTML =
        `<option value="none">None</option>` +
        movies.map(movie =>
            `<option value="${movie.id}">${movie.title}</option>`
        ).join("");

    // ⭐ Set dropdown to the user's current favorite
    if (user.favoriteMovie) {
        favoriteSelect.value = user.favoriteMovie;
    } else {
        favoriteSelect.value = "none";
    }

    loadTicketHistory(user);
});
// Populate dropdown with movies
favoriteSelect.innerHTML =
    `<option value="none">None</option>` +
    movies.map(movie =>
        `<option value="${movie.id}">${movie.title}</option>`
    ).join("");


// --- Load Ticket History ---
function loadTicketHistory(user) {
    ticketHistory.innerHTML = "";

    if (user.tickets.length === 0) {
        ticketHistory.innerHTML = `<tr><td colspan="5">No tickets found.</td></tr>`;
        return;
    }

    user.tickets.forEach(ticketId => {
        const t = tickets.find(ticket => ticket.id === ticketId);
        const m = movies.find(movie => movie.id === t.movieId);

        ticketHistory.innerHTML += `
            <tr>
                <td>${m.title}</td>
                <td>${t.date}</td>
                <td>${t.time}</td>
                <td>${t.seats.join(", ")}</td>
                <td>${t.purchaseDate}</td>
            </tr>
        `;
    });
}

// --- Logout ---
logoutBtn.addEventListener("click", () => {
    loggedInUser = null;
    loginView.hidden = false;
    accountView.hidden = true;
    loginForm.reset();
});

// Show registration view
showRegisterBtn.addEventListener("click", () => {
    loginView.hidden = true;
    registerView.hidden = false;
});

// Back to login
backToLoginBtn.addEventListener("click", () => {
    registerView.hidden = true;
    loginView.hidden = false;
});

// Handle account creation
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;

    // Check if email already exists
    if (users.some(u => u.email === email)) {
        alert("An account with this email already exists!");
        return;
    }

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password,
        tickets: [],
        memberSince: new Date().toLocaleDateString()
    };

    users.push(newUser);

    alert("Account created! Please log in.");

    registerForm.reset();
    registerView.hidden = true;
    loginView.hidden = false;
});

saveFavoriteBtn.addEventListener("click", () => {
    if (!loggedInUser) return;

    let selectedValue = favoriteSelect.value;

    if (selectedValue === "none") {
        loggedInUser.favoriteMovie = null;
        favoriteMovieText.textContent = "None selected";
    } else {
        const selectedId = Number(selectedValue);
        loggedInUser.favoriteMovie = selectedId;

        const movie = movies.find(m => m.id === selectedId);
        favoriteMovieText.textContent = movie ? movie.title : "None selected";
    }

    alert("Favorite movie updated!");
});