let mysql = require("mysql");

// we placed the connections in this source object
let connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "Do4frnt57",
    database: "eatdaburger"
});

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