const products = [
  {
    sold: 38,
    name: "AZ2040",
    description: "Super awesome guitar",
    price: 2000,
    brand: ObjectId("5c13ded40b0522931fa738ed"),
    shipping: true,
    available: true,
    wood: ObjectId("5c13e2c1b50abca4b07abf93"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T17:47:52.838Z"),
    updatedAt: ISODate("2018-06-26T22:09:18.969Z"),
    __v: 0
  },

  {
    sold: 4,
    name: "Roadcore",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 1500,
    brand: ObjectId("5c13ded40b0522931fa738ed"),
    shipping: true,
    available: true,
    wood: ObjectId("5b2c1c0981e781b44909627d"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T17:55:14.152Z"),
    updatedAt: ISODate("2018-06-26T22:09:18.972Z"),
    __v: 0
  },

  {
    sold: 15,
    name: "JEM UV7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 3500,
    brand: ObjectId("5c13ded40b0522931fa738ed"),
    shipping: true,
    available: false,
    wood: ObjectId("5b2c1c81255983b4795f8fda"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T17:55:45.880Z"),
    updatedAt: ISODate("2018-06-22T17:55:45.880Z"),
    __v: 0
  },

  {
    sold: 0,
    name: "TELE-ub23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 600,
    brand: ObjectId("5c13e2c1b50abca4b07abf94"),
    shipping: false,
    available: false,
    wood: ObjectId("5b2c1c0981e781b44909627d"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T17:56:27.270Z"),
    updatedAt: ISODate("2018-06-22T17:56:27.270Z"),
    __v: 0
  },

  {
    sold: 9,
    name: "FR7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 1300,
    brand: ObjectId("5c13ded40b0522931fa738ef"),
    shipping: false,
    available: true,
    wood: ObjectId("5b2c1c81255983b4795f8fda"),
    frets: 24,
    publish: true,
    createdAt: ISODate("2018-06-22T17:59:41.868Z"),
    updatedAt: ISODate("2018-06-22T17:59:41.868Z"),
    __v: 0
  },

  {
    sold: 0,
    name: "Blue6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 700,
    brand: ObjectId("5c13ded40b0522931fa738f0"),
    shipping: true,
    available: true,
    wood: ObjectId("5b2c1c81255983b4795f8fda"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T18:00:32.803Z"),
    updatedAt: ISODate("2018-06-22T18:00:32.803Z"),
    __v: 0
  },

  {
    sold: 4,
    name: "PET967",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 1200,
    brand: ObjectId("5c13ded40b0522931fa738f1"),
    shipping: true,
    available: true,
    wood: ObjectId("5b2c1c0981e781b44909627d"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T18:01:13.043Z"),
    updatedAt: ISODate("2018-06-22T18:01:13.043Z"),
    __v: 0
  },

  {
    sold: 0,
    name: "Robot 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 1200,
    brand: ObjectId("5c13ded40b0522931fa738f2"),
    shipping: true,
    available: true,
    wood: ObjectId("5b2c1c0981e781b44909627d"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T18:02:00.569Z"),
    updatedAt: ISODate("2018-06-22T18:02:00.569Z"),
    __v: 0
  },

  {
    sold: 3,
    name: "Dinky 7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 600,
    brand: ObjectId("5c13ded40b0522931fa738f3"),
    shipping: true,
    available: true,
    wood: ObjectId("5c13e2c1b50abca4b07abf93"),
    frets: 24,
    publish: true,
    createdAt: ISODate("2018-06-22T18:02:37.344Z"),
    updatedAt: ISODate("2018-06-26T06:11:52.923Z"),
    __v: 0
  },

  {
    sold: 15,
    name: "RoadCaster",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 1,
    brand: ObjectId("5c13e2c1b50abca4b07abf94"),
    shipping: true,
    available: false,
    wood: ObjectId("5b2c1c0981e781b44909627d"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T18:03:05.168Z"),
    updatedAt: ISODate("2018-06-26T23:32:52.944Z"),
    __v: 0
  },

  {
    sold: 12,
    name: "ACU700",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    price: 1,
    brand: ObjectId("5c13e2c1b50abca4b07abf95"),
    shipping: true,
    available: true,
    wood: ObjectId("5b2c1c81255983b4795f8fda"),
    frets: 22,
    publish: true,
    createdAt: ISODate("2018-06-22T19:18:08.458Z"),
    updatedAt: ISODate("2018-06-26T23:32:52.949Z"),
    __v: 0
  }
];

module.exports = products;
