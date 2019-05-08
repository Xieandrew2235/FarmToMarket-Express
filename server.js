require('dotenv').config();
const express = require("express");
const app = express();
const db = require("./models");

const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session'); 

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

require('./config/passport')(passport);

// Enable CORS so that browsers don't block requests.
app.use((req, res, next) => {
  //  update localhost to github io page url
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.use(session({
  key: 'user_sid',
  secret: 'goN6DJJC6E287cC77kkdYuNuAyWnz7Q3iZj8',
  resave: true,
  saveUninitialized: false,
  cookie: {
      expires: 600000,
      httpOnly: false
  }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash());

app.use(routes);

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  })
})