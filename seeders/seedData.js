const userOne = {
  username: "userOne",
  email: "test@test.com",
  password: "12331231",
  widgets: [
    {
      type: "park",
      id: 1,
      data: {
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
    },
    {
      type: "park",
      id: 2,
      data: {
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
    },
  ],
};

const userTwo = {
  username: "userTwo",
  email: "blah@blah.com",
  password: "2312313",
  widgets: [
    {
      type: "park",
      id: 1,
      data: {
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
    },
    {
      type: "note",
      id: 2,
      data: {
        title: "Stuff to pack",
        content: "Stuff, Stuff, Stuff",
      },
    },
  ],
};

const userSeeds = [userOne, userTwo];

module.exports = userSeeds;
