const express = require("express");
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'username',
  password : 'password',
  database : 'databasename'
});

connection.connect((err) => {
    if(err) throw err;
    console.log('Connected to MySQL Server!');
});

//this is vulnerable code 
app.get("/insecure",(req,res) => {
  connection.query("SELECT * FROM studesnt_records WHERE sid = '"+ req.body.sid +"' AND name = '"+ req.body.name +"'", (error, results) => {
    if (error) throw error;
  });
});

//this is safer code || Use prepared statements where/when possible
app.get("/safer",(req,res) => {
  connection.query("SELECT * FROM student_records WHERE sid = '"+ connection.escape(req.body.sid) +"' AND name = '"+ connection.escape(req.body.name) +"'", (error, results) => {
    if (error) throw error;
  });
});

//this is safe code
app.get("/safe",(req,res) => {
    connection.query("SELECT * FROM health_records WHERE dob = ? AND name = ?",[req.body.dob, req.body.name], (error, results) => {
        if(error) throw err;
        console.log('The data from users table are: \n', rows);
        connection.end();
      });
});


//this is unexploitable code
app.get("/safe",(req,res) => {
  connection.query("SELECT * FROM student_records WHERE sid = '123465' AND name = 'Dan'", (error, results) => {
    if (error) throw error;
  });
});


app.listen(3000, () => {
    console.log('Server is running at port 3000');
});