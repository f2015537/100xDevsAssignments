const { Admin } = require("../db/index");

async function adminUsernameExistsMiddleware(req, res, next) {
  const { username } = req.body;
  const user = await Admin.findOne({ username }).exec();
  if (user) {
    return res.status(404).json({ msg: "Username already exists" });
  } else {
    next();
  }
}

// Middleware for handling auth
async function adminExistsMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  const user = await Admin.findOne({ username, password }).exec();
  if (user) {
    next();
  } else {
    return res.status(404).json({ msg: "Invalid credentials" });
  }
}

module.exports = { adminExistsMiddleware, adminUsernameExistsMiddleware };
