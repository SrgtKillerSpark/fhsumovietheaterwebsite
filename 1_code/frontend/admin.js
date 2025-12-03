import { movies, admins } from "./data.js";

// HTML elements
const loginView = document.getElementById("loginView");
const adminView = document.getElementById("adminView");
const loginForm = document.getElementById("loginForm");
const adminName = document.getElementById("adminName");
const currentMoviesList = document.getElementById("currentMoviesList");
const addMovieForm = document.getElementById("addMovieForm");
const logoutBtn = document.getElementById("logoutBtn");

let loggedInAdmin = null;

//Render the list of movies
function renderMovies() {
    currentMoviesList.innerHTML = "";

    movies.forEach(movie => {
        const movieCard = document.createElement("article");
        movieCard.className = "card";

        movieCard.innerHTML = `
            <div class="poster">
                <img src="${movie.poster}" alt="${movie.title} poster">
            </div>
            <div class="content">
                <div class="title">${movie.title}</div>
                <div class="meta">
                    ${movie.rating} | 
                    ${Math.floor(movie.runtimeMins / 60)}h ${movie.runtimeMins % 60}m
                </div>
            </div>
        `;

        currentMoviesList.appendChild(movieCard);
    });
}

//Admin login
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    const admin = admins.find(a => a.email === email && a.password === password);

    if (!admin) {
        alert("Invalid admin email or password");
        return;
    }

    loggedInAdmin = admin;
    loginView.hidden = true;
    adminView.hidden = false;
    adminName.textContent = admin.name;

    renderMovies();
});

//Add new movie
addMovieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("movieTitle").value.trim();
    const poster = document.getElementById("moviePoster").value.trim();
    const rating = document.getElementById("movieRating").value.trim();
    const runtime = Number(document.getElementById("movieRuntime").value);

    if (!title || !poster || !rating || !runtime) {
        alert("Please fill in all fields.");
        return;
    }

    const newMovie = {
        id: movies.length + 1,
        title,
        poster,
        rating,
        runtimeMins: runtime
    };

    movies.push(newMovie);
    addMovieForm.reset();
    renderMovies();

    alert(`Movie "${title}" added successfully!`);
});

//Logout
logoutBtn.addEventListener("click", () => {
    loggedInAdmin = null;
    adminView.hidden = true;
    loginView.hidden = false;
    loginForm.reset();
});