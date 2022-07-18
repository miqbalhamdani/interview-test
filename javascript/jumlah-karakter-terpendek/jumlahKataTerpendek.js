const karakterKataTerpendek = (s) => {
  const r = s.split(' ').map((item) => item.length);
  return Math.min(...r);
}

module.exports = karakterKataTerpendek;
