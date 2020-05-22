const express = require("express");
const db = require("../models");
const userController = require("../controller/user");
const isAuthenticated = require("../config/isAuthenticated");

const router = express.Router();

// use isAuthenticated middleware to protect this route
router.get("/api/user/:id", isAuthenticated, (req, res) => {
  db.User.findById(req.params.id)
    .select("-password")
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).send({ success: false, message: "No user found" });
      }
    })
    .catch((err) => res.status(400).send(err));
});

//Change the users role
router.put("/api/:user/:role", (req, res) => {
  console.log(req);
  const userID = req.params.user;
  const role = req.params.role;
  userController
    .changeUserRole(userID, role)
    .then(() => {
      res.send("Role changed!");
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
