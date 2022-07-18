const highest = require("./highest.json");
const lowest = require("./lowest.json");

const sortLowestPrice = require("./sortLowestPrice");
const sortHighestPrice = require("./sortHighestPrice");

test("Menampilkan product dari harga terendah ke harga tertinggi", () => {
  expect(sortLowestPrice()).toEqual(lowest);
});

test("Menampilkan product dari harga tertinggi ke harga terendah", () => {
  expect(sortHighestPrice()).toEqual(highest);
});


