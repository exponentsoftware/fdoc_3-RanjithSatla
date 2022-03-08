/*	b. Create a function called ***signIn*** which allows user to sign in to the application */

users
  .find({ email: req.body.email })
  .exec()
  .then((user) => {
    if (user.length >= 1) {
      if (user.password === req.body.password) {
        res.status(200).json({ message: "User logged in successfully!" });
      } else {
        res.status(201).json({
          message: "Wrong credentials",
        });
      }
    } else {
      res.status(201).json({
        message: "User not registered",
      });
    }
  })
  .catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
