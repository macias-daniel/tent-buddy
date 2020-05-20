const db = require("../models");

const addUserWidget = ({ userID, type, data }) => {
  return db.User.findByIdAndUpdate(userID, {
    $push: { widgets: { type, data } },
  });
};

module.exports = { addUserWidget };
