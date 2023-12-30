const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtPassword = "secretUser";

async function userUsernameExistsMiddleware(req, res, next) {
  const { username } = req.body;
  const user = await User.findOne({ username }).exec();
  if (user) {
    return res.status(404).json({ msg: "Username already exists" });
  } else {
    next();
  }
}

async function signinMiddleware(req, res, next) {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password }).exec();
  if (user) {
    next();
  } else {
    return res.status(404).json({ msg: "Invalid credentials" });
  }
}

async function authMiddleware(req, res, next) {
  let token = req.headers.authorization;
  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, jwtPassword);
    req.body.username = decoded.username;
    next();
  } catch (error) {
    return res.status(404).json({ msg: "Invalid token" });
  }
}

module.exports = {
  authMiddleware,
  signinMiddleware,
  userUsernameExistsMiddleware,
};
