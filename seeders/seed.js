const mongoose = require("mongoose");
const db = require("../models");
const userSeeds = require("./seedData")

mongoose.connect("mongodb://localhost/tentBuddyDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then((data) => {
    console.log(`${data.result.n} records inserted!`);
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
