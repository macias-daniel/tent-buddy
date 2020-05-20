const db = require("../models");

const addUserWidget = (userID, type, data) => {
  return db.User.findByIdAndUpdate(userID, {
    $push: { widgets: { type, data } },
  });
};

const deleteUserWidgets = (userID, widgetID) => {
  console.log(userID, widgetID);
  return db.User.update(
    { _id: userID },
    { $pull: { widgets: { _id: widgetID } } }
  );
};

module.exports = { addUserWidget, deleteUserWidgets };
