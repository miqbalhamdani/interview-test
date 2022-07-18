module.exports = (n) => {
  const sq = Math.sqrt(n);
  return (sq % 1 === 0) ? true : false;
};
