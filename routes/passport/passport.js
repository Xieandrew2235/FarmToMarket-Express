const router   = require("express").Router();
const passport = require('passport');


// =====================================
// LOGIN ===============================
// =====================================

// process the login form
router.post('/signin', (req, res, next) => {
  console.log("/auth/signin get route hit")
  passportAuthenticate('local-login', req, res, next);
});

// =====================================
// SIGNUP ==============================
// =====================================

// process the signup form
router.post('/register', (req, res, next) => {
  passportAuthenticate('local-signup', req, res, next);
});

// =====================================
// passport local strategy =============
// =====================================

passportAuthenticate = (localStrategy, req, res, next) => {
  passport.authenticate(localStrategy, function(err, user, info) {
    if (err) {
      console.log("next", err)
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      console.log("user",user)
      console.log("info", info)
      return res.send({ success : false, message : info });
    }

    // ***********************************************************************
    // "Note that when using a custom callback, it becomes the application's
    // responsibility to establish a session (by calling req.login()) and send
    // a response."
    // Source: http://passportjs.org/docs
    // ***********************************************************************
    else{
      req.login(user, loginErr => {
        if (loginErr) {
          console.log("loginerr", loginErr)
          return next(loginErr);
        }
        console.log("\n##########################");
        console.log(req.isAuthenticated());
        console.log('sucess');
        console.log(req.session.passport.user);
        console.log("##########################");
        console.log("\n")

        res.cookie('user_email', user.email );
        res.cookie('user_type', user.userType );
        res.cookie('authenticated', "true" );

        return res.json(true);
      });
    }
  })(req, res, next);
}


// =====================================
// LOGOUT ==============================
// =====================================

router.get('/logout', (req, res) => {
    //req.logout();
     req.session.destroy(err => {
      req.logout();
      res.clearCookie("user_sid");
      res.clearCookie("user_email");
      res.clearCookie("user_type");
      res.clearCookie("authenticated");
      res.json(false);
    });
});

// =====================================
// Check Auth ==========================
// =====================================

router.get('/', (req, res)=>{
  if(req.isAuthenticated()){
    res.json(true)
  }else {
    res.json(false)
  }
})


module.exports = router;