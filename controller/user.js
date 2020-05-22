const db = require("../models");

//Add a new widget for a user using userID, widgetType, widgetData
const addUserWidget = (userID, type, data) => {
  return db.User.findByIdAndUpdate(userID, {
    $push: { widgets: { type, data } },
  });
};

//Deletes a specific widget using the users id and the widgets id
const deleteUserWidgets = (userID, widgetID) => {
  console.log(userID, widgetID);
  return db.User.updateOne(
    { _id: userID },
    { $pull: { widgets: { _id: widgetID } } }
  );
};

module.exports = { addUserWidget, deleteUserWidgets };
