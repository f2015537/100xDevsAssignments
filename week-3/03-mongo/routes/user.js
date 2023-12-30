const { Router } = require("express");
const {
  userExistsMiddleware,
  userUsernameExistsMiddleware,
} = require("../middleware/user");
const { courseExistsMiddleware } = require("../middleware/course");
const { User, Course } = require("../db/index");
const router = Router();

// User Routes
router.post("/signup", userUsernameExistsMiddleware, async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  return res.json({ msg: "User created successfully" });
});

router.get("/courses", userExistsMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({}).exec();
  return res.json({ courses });
});

router.post(
  "/courses/:courseId",
  userExistsMiddleware,
  courseExistsMiddleware,
  async (req, res) => {
    // Implement course purchase logic
    // console.log(req.body.course, req.body.user);
    // req.body.user.purchasedCourses.push(req.body.course);
    // console.log(req.body);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { _id: req.body.user._id },
        { $push: { purchasedCourses: req.body.course } },
        { new: true }
      );

      if (updatedUser) {
        return res.json({
          message: "Course purcahsed successfully",
          updatedUser,
        });
      } else {
        return res.status(404);
      }
    } catch (error) {
      return res.status(404);
    }
  }
);

router.get("/purchasedCourses", userExistsMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({ _id: req.body.user._id });
    if (user) {
      const purchasedCourses = user.purchasedCourses;
      return res.json({ purchasedCourses });
    } else {
      res.status(404);
    }
  } catch (error) {
    res.status(404);
  }
});

module.exports = router;
