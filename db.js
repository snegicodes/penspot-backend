import mysql from "mysql2";

export const db = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "blog",
  // user: "unt9mqpynncuntdd",
  // password: "MfTAt5sYSZ1ZsyWIcHJ9",
  // host: "bmvm1lbomjwyik5etcxp-mysql.services.clever-cloud.com",
  // database: "bmvm1lbomjwyik5etcxp",
});
