import mysql, { ConnectionOptions } from "mysql2";

const conOption: ConnectionOptions = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "qwer",
  database: "study_db",
};
export const db = mysql.createConnection(conOption);

module.exports = db;
