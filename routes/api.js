const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const isAuthenticated = require("../config/isAuthenticated");

//Post a new widget to user
router.post("/api/user/widget", isAuthenticated, (req, res) => {
  const userID = req.body.userID;
  const widgetType = req.body.widgetType;
  const widgetData = req.body.widgetData;

  //Checks if widget data is an object and will throw a error otherwise
  if (typeof widgetData !== "object") {
    throw new Error("widgetData must be an object");
  }

  //Calls user controller function
  userController
    .addUserWidget(userID, widgetType, widgetData)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

//Deletes a specific widget
router.delete("/api/user/widget", isAuthenticated, (req, res) => {
  const userID = req.body.userID;
  const widgetID = req.body.widgetID;
  //Calls user controller function
  userController
    .deleteUserWidgets(userID, widgetID)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

//Update widget data
router.put("/api/user/widget", (req, res) => {
  const userID = req.body.userID;
  const widgetID = req.body.widgetID;
  const widgetData = req.body.widgetData;

  // Call update widget function
  userController
    .updateUserWidget(userID, widgetID, widgetData)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

module.exports = router;
