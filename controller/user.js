const db = require("../models");

//Add a new widget for a user using userID, widgetType, widgetData
const addUserWidget = (userID, type, data) => {
  return db.User.findByIdAndUpdate(userID, {
    $push: { widgets: { type, data } },
  });
};

//Deletes a specific widget using the users id and the widgets id
const deleteUserWidgets = (userID, widgetID) => {
  return db.User.updateOne(
    { _id: userID },
    { $pull: { widgets: { _id: widgetID } } }
  );
};

//Change a specific user's role
const changeUserRole = (userID, userRole) => {
  return db.User.updateOne({ _id: userID }, { role: userRole });
};

const updateUserWidget = (userID, widgetID, data) => {
  return db.User.updateOne(
    { _id: userID, "widgets._id": widgetID },
    { $set: { "widgets.$.data": data } }
  );
};

module.exports = {
  addUserWidget,
  deleteUserWidgets,
  changeUserRole,
  updateUserWidget,
};
