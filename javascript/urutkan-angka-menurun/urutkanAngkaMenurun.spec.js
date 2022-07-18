const urutkanAngkaMenurun = require("./urutkanAngkaMenurun");

test("Urutkan angka berdasarkan dari yang paling besar, ke yang paling kecil", () => {
  expect(urutkanAngkaMenurun(0)).toBe(0);
  expect(urutkanAngkaMenurun(1)).toBe(1);
  expect(urutkanAngkaMenurun(123456789)).toBe(987654321);
  expect(urutkanAngkaMenurun(42145)).toBe(54421);
  expect(urutkanAngkaMenurun(145263)).toBe(654321);
});
