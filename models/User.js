const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  widget: {
    park: [
      {
        id: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        hoursOfOp: {
          type: String,
        },
        phoneNum: {
          type: String,
        },
        desc: {
          type: String,
        },
        url: {
          type: String,
        },
        address: {
          type: String,
        },
        latLng: {
          type: String,
        },
        alert: [
          {
            id: {
              type: String,
              required: true,
            },
            title: {
              type: String,
              required: true,
            },
            category: {
              type: String,
            },
            desc: {
              type: String,
            },
          },
        ],
      },
    ],
    weather: [
      {
        id: {
          type: String,
          required: true,
        },
        location: {
          type: String,
          required: true,
        },
        currentDay: {
          type: String,
        },
        currentDate: {
          type: String,
        },
        icon: {
          type: String,
        },
        temp: {
          type: String,
        },
        humidity: {
          type: String,
        },
        description: {
          type: String,
        },
        windSpeed: {
          type: String,
        },
        fiveDayWeather: [
          {
            day: {
              type: String,
            },
            date: {
              type: String,
            },
            temp: {
              type: String,
            },
            icon: {
              type: String,
            },
            humidity: {
              type: String,
            },
          },
        ],
      },
    ],
    note: [
      {
        id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        content: {
          type: String,
        },
      },
    ],
  },
});

// Execute before each user.save() call
UserSchema.pre("save", function (callback) {
  const user = this;

  // Break out if the password hasn't changed
  if (!user.isModified("password")) {
    return callback();
  }

  // Password changed so we need to hash it
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return callback(err);
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return callback(err);
      }
      user.password = hash;
      callback();
    });
  });
});

UserSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    }
    cb(null, isMatch);
  });
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
