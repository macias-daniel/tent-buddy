const db = require("../models");

const addUserWidget = (id, widgetType, widgetData) => {
  return db.User.updateOne(
    { _id: id },
    { $push: { ["widget." + widgetType]: widgetData } }
  );
};

module.exports = { addUserWidget };
