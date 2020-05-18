const db = require("../models");

const getUser = (username) => {
  return db.User.findOne({ username: username });
};

module.exports = { getUser };
