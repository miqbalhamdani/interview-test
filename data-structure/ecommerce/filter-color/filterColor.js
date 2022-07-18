const data = require("../data.json");

module.exports = () => {
  return data.reduce((accumulator, item) => {
    if (accumulator.includes(item.color)) return accumulator;

    return [...accumulator, item.color];
  }, []);
};
