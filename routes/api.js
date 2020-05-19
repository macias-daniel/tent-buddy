const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

//Get users widgets
router.get("/api/:username", (req, res) => {
  const username = req.params.username;
  userController.getUserWidgets(username).then((userData) => {
    res.send(userData);
  });
});

//Post a new widget to user
router.post("/api/widget", (req, res) => {
  const username = req.body.username;
  const widgetType = req.body.type;
  const widgetData = req.body.data;
  userController
    .addUserWidget(username, widgetType, widgetData)
    .then((response) => {
      res.send(response);
    });
});

module.exports = router;
