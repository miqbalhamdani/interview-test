const kataTerpendek = require('./jumlahKataTerpendek');

test("Menampilkan jumlah karakter, dari kata paling pendek, sebuah kalimat", () => {
  expect(kataTerpendek("bitcoin take over the world maybe who knows perhaps")).toBe(3);
  expect(kataTerpendek("turns out random test cases are easier than writing out basic ones")).toBe(3);
  expect(kataTerpendek("Let's travel abroad shall we")).toBe(2);
});
