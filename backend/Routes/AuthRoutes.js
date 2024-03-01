const { VolunteerSignup, VolunteerLogin } = require("../Controllers/AuthController");
const { volunteerVerification } = require("../Middlewares/AuthMiddlewares")
const router = require("express").Router();

router.post("/volunteerSignup", VolunteerSignup);
router.post("/volunteerLogin", VolunteerLogin);
router.post("/volunteerVerify", volunteerVerification);

module.exports = router;