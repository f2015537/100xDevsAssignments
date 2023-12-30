const { Course } = require("../db/index");

async function courseExistsMiddleware(req, res, next) {
  // Checks if the given courseId is valid
  const { courseId } = req.params;
  try {
    const course = await Course.findOne({ _id: courseId }).exec();
    req.body.courseId = courseId;
  } catch (error) {
    return res.status(404).json({ msg: "Invalid course id" });
  }
  next();
}

module.exports = { courseExistsMiddleware };
