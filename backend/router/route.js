const { Router } = require("express");
const router = Router();
const controller = require("../controllers/controller");

router.route("/register").post(controller.insertUser);

router.route("/login").post(controller.userLogin);

router
  .route("/result")
  .post(controller.insertResult)
  .get(controller.getUserResult);

router.route("/resultList").get(controller.getResultList);

module.exports = router;
