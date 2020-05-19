const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

//Get users widgets
router.get("/api/user/:_id", (req, res) => {
  const userID = req.params._id;
  userController.getUserWidgets(userID).then((userData) => {
    res.send(userData);
  });
});

//Post a new widget to user
router.post("/api/widget", (req, res) => {
  const userID = req.body.userID;
  const widgetType = req.body.type;
  const widgetData = req.body.data;
  userController
    .addUserWidget(userID, widgetType, widgetData)
    .then((response) => {
      res.send(response);
    });
});

module.exports = router;
