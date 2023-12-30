const { User } = require("../db/index");

async function userUsernameExistsMiddleware(req, res, next) {
  const { username } = req.body;
  const user = await User.findOne({ username }).exec();
  if (user) {
    return res.status(404).json({ msg: "Username already exists" });
  } else {
    next();
  }
}

// Middleware for handling auth
async function userExistsMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  const user = await User.findOne({ username, password }).exec();
  if (user) {
    req.body.user = user;
    next();
  } else {
    return res.status(404).json({ msg: "Invalid credentials" });
  }
}

module.exports = { userExistsMiddleware, userUsernameExistsMiddleware };
