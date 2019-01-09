
//npm package dependency
var express = require("express");

//creating server
var app = express();


//establishing port
var PORT = process.env.PORT || 7500;

//data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));


//routers which will respond to user request
 require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//lisening to port
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
