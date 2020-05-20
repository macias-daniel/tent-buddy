const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

//Post a new widget to user
router.post("/api/widget", (req, res) => {
  userController.addUserWidget(req.body).then((response) => {
    res.send(response);
  });
});

router.delete("/api/user/widget", (req, res) => {
  userController
    .replaceUserWidgets(req.body)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
