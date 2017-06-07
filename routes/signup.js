// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models")

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.post("/signup", function(req, res) {
    db.User.create({firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      dateOfBirth: req.body.birthday}).then(function() {
        res.redirect("/");
      })
  });

    app.get("/users", function(req, res) {
    db.User.findAll({}).then(function(users) {
        console.log(users);
        res.json(users);
        // res.render("userManager", {
        //   users: users
        // });
      })
  });

  

};
