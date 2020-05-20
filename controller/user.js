const db = require("../models");

const addUserWidget = ({ userID, type, data }) => {
  return db.User.findByIdAndUpdate(userID, {
    $push: { widgets: { type, data } },
  });
};

const replaceUserWidgets = ({ userID, widgets }) => {
  return db.User.findByIdAndUpdate(userID, { widgets: widgets });
};

module.exports = { addUserWidget, replaceUserWidgets };
