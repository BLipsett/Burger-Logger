require('dotenv').config();
let mysql = require("mysql");

// we placed the connections in this source object



// let connection = mysql.createConnection({

//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: "w4i75a7f5k22uwgh"
    

    
// });

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        // port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: "w4i75a7f5k22uwgh"
});

};

// we use source.[name of connection] to hook into mysql
//let connection = mysql.createConnection(source.localhost);

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;