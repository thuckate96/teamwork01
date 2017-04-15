var express    = require("express");
var app 	   = express();

var bodyParser = require("body-parser");
var morgan 	   = require("morgan");
var mongoose   = require("mongoose");
var path       = require("path");

var configDB   = require('./models/database');
mongoose.connect(configDB.url);

 var port = process.env.PORT||5000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var index1 = require("./controllers/index1");
var index2 = require("./controllers/index2");

app.use("/api/user", index1);
app.use("/", index2);

app.listen(port);
console.log("Server listenning on port "+port);