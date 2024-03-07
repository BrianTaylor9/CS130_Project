const {RecievePayment} = require("../Controllers/PaymentController");
const router = require("express").Router();

router.post("/recievePayment", RecievePayment);
module.exports = router;