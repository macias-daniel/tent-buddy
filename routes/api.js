const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/api/user", (req, res) => {
  userController.getUserWidgets(req.body.username).then((userData) => {
    res.send(userData);
  });
});

module.exports = router;
