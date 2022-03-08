/* 	a. Imagine you are getting the above users collection from a MongoDB database. 

		a. Create a function called ***signUp*** which allows user to add to the collection. If user exists, inform the user that he has already an account.
		b. Create a function called ***signIn*** which allows user to sign in to the application */

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "17/05/2019 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "17/05/2019 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "17/05/2019 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "17/05/2019 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "17/05/2019 10:00 AM",
    isLoggedIn: false,
  },
];

users
  .find({ email: req.body.email })
  .exec()
  .then((user) => {
    if (user.length >= 1) {
      return res.status(409).json({
        message: "email already exists",
      });
    } else {
      const user = new users({
        _id: new mongoose.Types.ObjectId(),
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "17/05/2019 9:00 AM",
        isLoggedIn: false,
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            message: "User created successfully!",
          });
        })
        .catch((err) => {
          res.status(500).json({
            error: err,
          });
        });
    }
  })
  .catch((err) => {
    res.status(500).json({
      error: err,
    });
  });
