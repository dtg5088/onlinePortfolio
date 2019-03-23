//var db = require("../models");
var path = require("path");


module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/about", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });
};


  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/index.html"));
  // });

  // app.get("/search", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../views/search.html"));

    // db.Example.findAll({}).then(function (dbExamples) {
    //   res.render("index", {
    //     msg: "Welcome!",
    //     examples: dbExamples
    //   });
    // });
  // });

    //     // db.deals.findAll().then(function (deals) {
    //   //   res.render("search", {
    //   //     results: results
    //   //   });
    //   //   console.log(results);
    //   //   console.log(deals);
    //   // });
    // });