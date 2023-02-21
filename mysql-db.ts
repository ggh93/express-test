// const conOption: ConnectionOptions = {
//   host: "localhost",
//   port: 3000,
//   user: "root",
//   password: "qwer1234!Q",
//   database: "mydb",
// };
// const con = mysql.createConnection(conOption);
var mysql = require("mysql2");
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer",
  database: "study_db", // mysql db로 선택할때 그 db명
});
db.connect();

module.exports = db;
