const router = require("express").Router();
const passport = require("passport");
const control = require("../controller");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  }
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === 'image/jpg') {
    cb(null, true);
  } else {
    cb(new Error("Images Must Be jpeg, jpg or png"), false);
  }
};
const upload = multer({
  storage: storage,
  limits: 1024 * 1024 * 5,
  fileFilter: fileFilter
});
// auth logout
router.get("/logout", (req, res) => {
  req.logOut();
  res.json(req.user);
});

// auth with google+
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  res.redirect("/");
});

// new user validation midleware
const userValidation = (req, res, next) => {
  const { password, password2 } = req.body;

  if (password !== password2) {
    res.status(400).json({ message: "Passwords do not match" });
  } else {
    next();
  }
};

// register new user with username and password
router.post(
  "/register",
  upload.single('profileImage'),
  userValidation,
  (req, res) => {
    const new_user = {
        name: req.body.name,
        interest: req.body.interest,
        knowledge: req.body.knowledge,
        email: req.body.email,
        password: req.body.password,
        imageUrl: `uploads/${req.file.filename}`
    }
    control.User.getUserByEmail(new_user.email, (err, user) => {
      if (err) throw err;

      if (user) {
        res.send("Email address already taken.");
      } else {
        control.User.registerUser(new_user, (err, user) => {
          if (err) throw err;

          passport.authenticate("local")(req, res, () => {
            res.send(req.user);
          });
        });
      }
    });
  }
);

// authenticate with Local strategy
router.post(
  "/local",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth"
  }),
  (req, res) => {
    console.log(req.user);
    res.send(req.user);
  }
);

module.exports = router;
