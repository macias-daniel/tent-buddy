const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/api/user", (req, res) => {
  userController.getUser(req.body.username).then((userData) => {
    res.send(userData);
  });
});

router.get("/api/user", (req, res) => {

});

module.exports = router;
