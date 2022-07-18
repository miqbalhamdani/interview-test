module.exports = (n) => {
  const max = Math.max(...n.split(" ").map((i) => +i));
  const min = Math.min(...n.split(" ").map((i) => +i));

  return `${max} ${min}`;
};
