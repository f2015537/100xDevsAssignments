const { Router } = require("express");
const jwt = require("jsonwebtoken");
const {
  userUsernameExistsMiddleware,
  signinMiddleware,
  authMiddleware,
} = require("../middleware/user");
const { courseExistsMiddleware } = require("../middleware/course");
const { User, Course } = require("../db/index");
const jwtPassword = "secretUser";
const router = Router();

// User Routes
router.post("/signup", userUsernameExistsMiddleware, async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  return res.json({ msg: "User created successfully" });
});

router.post("/signin", signinMiddleware, (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username }, jwtPassword);
  return res.json({ token });
});

router.get("/courses", authMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({}).exec();
  return res.json({ courses });
});

router.post(
  "/courses/:courseId",
  courseExistsMiddleware,
  authMiddleware,
  async (req, res) => {
    // Implement course purchase logic
    // console.log(req.body.course, req.body.user);
    // req.body.user.purchasedCourses.push(req.body.course);
    // console.log(req.body);
    try {
      const updatedUser = await User.findOneAndUpdate(
        { username: req.body.username },
        { $push: { purchasedCourses: req.body.courseId } },
        { new: true }
      );

      if (updatedUser) {
        return res.json({
          message: "Course purcahsed successfully",
        });
      } else {
        return res.status(404);
      }
    } catch (error) {
      return res.status(404);
    }
  }
);

router.get("/purchasedCourses", authMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({ username: req.body.username }).populate(
      "purchasedCourses"
    );
    if (user) {
      const purchasedCourses = user.purchasedCourses;
      return res.json({ purchasedCourses });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
