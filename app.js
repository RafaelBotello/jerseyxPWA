require("dotenv").config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB
});

connection.connect(function(err) {
  if (err) throw err;
  test();
  testprod();
  inserting();
  deleteProd();
  test();
  connection.end();
});

const test = () => {
  let queryStr = `SELECT * FROM users`;
  connection.query(queryStr, function(err, data) {
    if (err) throw err;
    console.log(data);
  });
};

const testprod = () => {
  let queryStr = `SELECT * FROM products`;
  connection.query(queryStr, function(err, data) {
    if (err) throw err;
    console.log(data);
  });
};

const inserting = () => {
  let queryStr =
    "INSERT INTO users(username, age, phoneNumber)VALUES('Test',12,'1234567890')";
  connection.query(queryStr, function(err, data) {
    if (err) throw err;
    console.log("Data inserted correctly.");
  });
};

const deleteProd = () => {
  let queryStr = "DELETE FROM users WHERE username='Test'";
  connection.query(queryStr, function(err, data) {
    if (err) throw err;
    console.log("Data deleted correctly.");
  });
};
