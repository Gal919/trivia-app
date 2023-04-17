const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");

router.route("/register").post(controller.insertUser);

module.exports = router;
