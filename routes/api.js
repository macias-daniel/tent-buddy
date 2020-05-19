const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

//Get users widgets
router.get("/api/user/:username", (req, res) => {
  const username = req.params.username;
  userController.getUserWidgets(username).then((userData) => {
    res.send(userData);
  });
});

//Post a new widget to user
router.post("/api/widget", (req, res) => {
  userController
    .addUserWidget(req.body.username, req.body.type, req.body.data)
    .then((response) => {
      res.send(response);
    });
});

module.exports = router;
