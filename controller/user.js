const db = require("../models");

const getUserWidgets = (username) => {
  return db.User.findOne({ username: username }).select("-password");
};

const addUserWidget = (username, widgetType, widgetData) => {
  return db.User.updateOne(
    { username: username },
    { $push: { ["widget." + widgetType]: widgetData } }
  );
};

module.exports = { getUserWidgets, addUserWidget };
