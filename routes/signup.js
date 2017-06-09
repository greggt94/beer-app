// Dependencies
var path = require("path");
var db = require("../models");

// Routes
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
    app.post("/signup", function(req, res) {
        db.User.create({
            firstName: req.body.first_name,
            lastName: req.body.last_name,
            email: req.body.email,
            password: req.body.password,
            dateOfBirth: req.body.birthday
        }).then(function() {
            res.redirect("/signup");
        });
    });

    app.get("/signup", function(req, res) {
        db.User.findAll({}).then(function(User) {
            res.render("userManager", {
                User: User
            });
        });
    });

};
