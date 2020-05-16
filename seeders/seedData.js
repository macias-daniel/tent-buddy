const userOne = {
  username: "userOne",
  email: "test@test.com",
  password: "12331231",
  widget: {
    park: [
      {
        id: "2134124",
        location: "place",
        hoursOfOp: "9-10",
        phoneNum: "231241",
        desc: "beautiful park",
        url: "www.fakePark.com",
        address: "1231 place ave",
        latLng: "201/21321",
        alert: [
          {
            id: "213123",
            title: "flash flood",
            category: "dangerous",
            desc: "dangerous floods and rains",
          },
          {
            id: "213123",
            title: "flash flood",
            category: "dangerous",
            desc: "dangerous floods and rains",
          },
        ],
      },
      {
        id: "32190",
        location: "different place",
        hoursOfOp: "9-10",
        phoneNum: "231241",
        desc: "beautiful park",
        url: "www.otherPark.com",
        address: "1243123 place ave",
        latLng: "31231/23121",
        alert: [
          {
            id: "213123",
            title: "food",
            category: "dangerous",
            desc: "dangerous foood",
          },
          {
            id: "213123",
            title: "rain",
            category: "conditions",
            desc: "rains and floods",
          },
        ],
      },
    ],
  },
};

const userTwo = {
  username: "userTwo",
  email: "blah@blah.com",
  password: "2312313",
  widget: {
    park: [
      {
        id: "2134124",
        location: "place",
        hoursOfOp: "9-10",
        phoneNum: "231241",
        desc: "beautiful park",
        url: "www.fakePark.com",
        address: "1231 place ave",
        latLng: "201/21321",
        alert: [
          {
            id: "213123",
            title: "flash flood",
            category: "dangerous",
            desc: "dangerous floods and rains",
          },
          {
            id: "213123",
            title: "flash flood",
            category: "dangerous",
            desc: "dangerous floods and rains",
          },
        ],
      },
    ],
    note: [
      {
        id: "1232131",
        title: "Stuff to pack",
        content: "Stuff, Stuff, Stuff",
      },
    ],
  },
};

const userThree = {
  username: "userThree",
  email: "okay@okay.com",
  password: "2312313",
  widget: {
    park: [
      {
        id: "2134124",
        location: "place",
        hoursOfOp: "9-10",
        phoneNum: "231241",
        desc: "beautiful park",
        url: "www.fakePark.com",
        address: "1231 place ave",
        latLng: "201/21321",
        alert: [
          {
            id: "213123",
            title: "flash flood",
            category: "dangerous",
            desc: "dangerous floods and rains",
          },
          {
            id: "213123",
            title: "flash flood",
            category: "dangerous",
            desc: "dangerous floods and rains",
          },
        ],
      },
    ],
    note: [
      {
        id: "1232131",
        title: "Stuff to pack",
        content: "Stuff, Stuff, Stuff",
      },
    ],
    weather: [
      {
        id: "2131231",
        location: "a place somewhere",
        currentDay: "Wednesday",
        currentDate: "10/20/21",
        icon: "rain",
        temp: "91",
        humidity: "91%",
        precipitation: "rain",
        clouds: "70%",
        windSpeed: "30 mph",
        fiveDayWeather: [
          {
            day: "tuesday",
            date: "10/10/10",
            temp: "70",
            icon: "snow",
            humidity: "50%",
          },
          {
            day: "tuesday",
            date: "10/10/10",
            temp: "70",
            icon: "snow",
            humidity: "50%",
          },
          {
            day: "tuesday",
            date: "10/10/10",
            temp: "70",
            icon: "snow",
            humidity: "50%",
          },
          {
            day: "tuesday",
            date: "10/10/10",
            temp: "70",
            icon: "snow",
            humidity: "50%",
          },
          {
            day: "tuesday",
            date: "10/10/10",
            temp: "70",
            icon: "snow",
            humidity: "50%",
          },
        ],
      },
    ],
  },
};

const userSeeds = [userOne, userTwo, userThree];

module.exports = userSeeds;
