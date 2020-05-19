const db = require("../models");

const getUserWidgets = (id) => {
  return db.User.findOne({ _id: id }, "widget");
};

const addUserWidget = (id, widgetType, widgetData) => {
  return db.User.updateOne(
    { _id: id },
    { $push: { ["widget." + widgetType]: widgetData } }
  );
};

module.exports = { getUserWidgets, addUserWidget };
