const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");

router.route("/register").post(controller.insertUser);

router.route("/login").post(controller.userLogin);

router.route("/userData").post(controller.userData);

module.exports = router;
