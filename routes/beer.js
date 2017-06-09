// Dependencies
var path = require("path");
var db = require("../models");

// Routes
module.exports = function(app) {

    app.get("/main", function(req, res) {
        db.Beer.findAll({}).then(function(Beer) {
            res.render("beer", {
                Beer: Beer
            });
        });
    });

};

