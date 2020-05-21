const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

//Post a new widget to user
router.post("/api/user/widget", (req, res) => {
  const userID = req.body.userID;
  const widgetType = req.body.widgetType;
  const widgetData = req.body.widgetData;
  userController
    .addUserWidget(userID, widgetType, widgetData)
    .then((response) => {
      res.send(response);
    });
});

router.delete("/api/user/widget", (req, res) => {
  const userID = req.body.userID;
  const widgetID = req.body.widgetID;
  userController.deleteUserWidgets(userID, widgetID).then((response) => {
    res.send(response);
  });
});

module.exports = router;
