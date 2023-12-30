const { Router } = require("express");
const {
  adminExistsMiddleware,
  adminUsernameExistsMiddleware,
} = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", adminUsernameExistsMiddleware, async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const admin = new Admin({ username, password });
  await admin.save();
  return res.json({ msg: "Admin created successfully" });
});

router.post("/courses", adminExistsMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink, published } = req.body;
  const course = new Course({
    title,
    description,
    price,
    imageLink,
    published,
  });
  const response = await course.save();
  return res.json({
    message: "Course created successfully",
    courseId: response._id,
  });
});

router.get("/courses", adminExistsMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({}).exec();
  return res.json({ courses });
});

module.exports = router;
