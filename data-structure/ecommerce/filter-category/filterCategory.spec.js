const filterCategory = require("./filterCategory");
const result = require("./filterCategory.json");

test("Menampilkan data category dan total kuantity dari kategori tersebut", () => {
  expect(
    filterCategory()
      .map((x) => x.id)
      .sort()
  ).toEqual(result.map((x) => x.id).sort());
});
