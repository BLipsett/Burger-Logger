const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

let db = require("./models");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static files
app.use(express.static("public"));

//Routes
require("./routes")

//Sync sequelize models
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
        console.log("App is listening on PORT" + PORT)
    });
});

