var mysql = require("mysql");
require('dotenv').config();

var connection;

if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else{
    connection = mysql.createConnection({
        root: 3000,
        host: 'localhost',
        user: 'root',
        password: process.env.SQL_PASS,
        database: 'burgers_db',
    });
};


connection.connect(function(err){
	if(err){
		console.error("error connecting"+ err.stack);
		return;
	}
	console.log("connected as id: " + connection.threadId);
});

module.exports = connection;