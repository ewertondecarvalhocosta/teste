//const mysql = require("mysql2");
//require("dotenv").config();

import mysql from "mysql2";
import "dotenv/config"

const conexao = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "fam2026",
    database: process.env.DB_NAME || "gamehub_db",
})

//module.exports= conexao;
export default conexao;