var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars")
var db = require("./models");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use("/public", express.static("./public"));

// Setting up Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes =============================================================
require("./routes/landing.js")(app);
require("./routes/login.js")(app);
require("./routes/signup.js")(app);
require("./routes/beer.js")(app);
require("./routes/submissions.js")(app);



// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});
