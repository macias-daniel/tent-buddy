const db = require("../models");

const getUserWidgets = (username) => {
  return db.User.findOne({ username: username }, "widget");
};

module.exports = { getUserWidgets };
