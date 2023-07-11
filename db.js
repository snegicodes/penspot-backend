import mysql from "mysql2";

export const db = mysql.createConnection({
  user: "root",
  password: "MwRuIoExaGUu2aBvsHSS",
  host: "containers-us-west-1.railway.app",
  database: "railway",
  port:6074,
});
