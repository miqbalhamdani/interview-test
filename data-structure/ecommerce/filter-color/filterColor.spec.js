const filterColor = require("./filterColor");

test("Menampilkan data category dan total kuantity dari kategori tersebut", () => {
  expect(filterColor().sort()).toEqual(["brown", "black", "white", "pink"].sort());
});
