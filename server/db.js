import mysql from "mysql"; 

export const db = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "name-password",
    database:"name-database"
})

console.log("connection!!")