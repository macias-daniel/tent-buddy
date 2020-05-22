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
  const userID = req.params.user;
  const role = req.params.role;

  //Check that user role passed is either an admin or user
  if (role !== "admin" && role !== "user") {
    throw new Error("Invalid Role Type");
  }

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
