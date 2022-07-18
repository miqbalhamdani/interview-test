const akarBilangan = require("./akarBilangan");

test("Apakah bilangan tersebut mempunyai akar kuadrat", () => {
  expect(akarBilangan(-1)).toBe(false);
  expect(akarBilangan(0)).toBe(true);
  expect(akarBilangan(3)).toBe(false);
  expect(akarBilangan(4)).toBe(true);
  expect(akarBilangan(25)).toBe(true);
  expect(akarBilangan(26)).toBe(false);
});
