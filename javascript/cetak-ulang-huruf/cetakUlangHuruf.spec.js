const cetakUlangHuruf = require("./cetakUlangHuruf");

test("Cetak ulang huruf dengan jumlah huruf yang di cetak berdasarkan perulangan", () => {
  expect(cetakUlangHuruf('abcd')).toBe('A-Bb-Ccc-Dddd');
  expect(cetakUlangHuruf('RqaEzty')).toBe('R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy');
  expect(cetakUlangHuruf('cwAt')).toBe('C-Ww-Aaa-Tttt');
  expect(cetakUlangHuruf('EvidjUnokmM')).toBe('E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
  expect(cetakUlangHuruf('HbideVbxncC')).toBe('H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');
  expect(cetakUlangHuruf('NyffsGeyylB')).toBe('N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
  expect(cetakUlangHuruf('ZpglnRxqenU')).toBe('Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
});
