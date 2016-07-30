/*
// Here is where you make the connection to the database and export and used by the O.R.M.
// */
var mysql = require('mysql');
// var connection = mysql.createConnection({
// 	port: 8889,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	database: 'cat_db',
// });

// connection.connect(function (err) {
// 	if (err) {
// 		console.error('error connecting: ' + err.stack);
// 		return;
// 	}
// 	console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;
//====================================================================

var source = {

    localhost: {
        port: 3306,
        host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'u8dd0j21ow03sod4',
        password: "r8tq2xtmn7oovbrf",
        database: "cat_db"
    },
    jawsDB: {
         port: 3306,
        host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'u8dd0j21ow03sod4',
        password: "r8tq2xtmn7oovbrf",
        database: "ajh8jslg3tfhfzbo"
        // TODO: Add your JawsDB connection info here
    }
}


// TODO: connect your jawsDB connection witht he mysql connection.
var connection = mysql.createConnection(source.jawsDB);



// Replace the connection code here with one to connect to you JawsDB connection.
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;