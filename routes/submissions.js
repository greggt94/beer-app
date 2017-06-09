// Dependencies
var path = require("path");
var db = require("../models");

// Routes
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
    app.get("/submissions", function(req, res) {
        res.render("submissions");
    });

    app.post("/submissions", function(req, res) {
        db.Submissions.create({
            userId: 1,
            beerId: req.body.beerId,
            rankId: req.body.rankId,
            comment: req.body.comment
        }).then(function() {
            res.redirect("/submissions_manager");
        });
    });

    app.get("/submissions_manager", function(req, res) {
        db.Submissions.findAll({}).then(function(Submissions) {
            res.render("submissions_manager", {
                Submissions: Submissions
            });
        });
    });

};
