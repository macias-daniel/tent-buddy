const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

//Post a new widget to user
router.post("/api/widget", (req, res) => {
  const id = req.body.id;
  const widgetType = req.body.type;
  const widgetData = req.body.data;
  userController.addUserWidget(id, widgetType, widgetData).then((response) => {
    res.send(response);
  });
});

module.exports = router;
