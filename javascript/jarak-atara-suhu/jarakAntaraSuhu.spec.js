const jarakAntaraSuhu = require("./jarakAntaraSuhu");

test("Cetak suhu udara paling panas ke paling dingin", () => {
  expect(jarakAntaraSuhu("1 2 3 4 5")).toBe("5 1");
  expect(jarakAntaraSuhu("1 2 -3 4 5")).toBe("5 -3");
  expect(jarakAntaraSuhu("1 9 3 4 -5")).toBe("9 -5");
});
