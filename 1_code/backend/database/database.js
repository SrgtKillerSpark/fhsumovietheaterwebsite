import mysql from 'mysql2';

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'ROOTpassword22!!',
    database: 'movie_theater'
}).promise();

// Use import statement below to import to js file in backend folder.
// If using in another folder in backend you will need to change the file location
// import db from './database/database.js'
export default db;