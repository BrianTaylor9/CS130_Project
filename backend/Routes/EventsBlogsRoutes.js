const { events } = require("../Controllers/EventsController");
const { blogs } = require("../Controllers/BlogsController");
const router = require("express").Router();

router.get("/events", events);
router.get("/blogs", blogs);

module.exports = router;