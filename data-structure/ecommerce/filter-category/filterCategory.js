const data = require("../data.json");

module.exports = () => {
  return data.reduce((accumulator, item) => {
    const index = accumulator.findIndex(
      (accumulatorItem) => accumulatorItem.name === item.category
    );

    if (index > -1) {
      accumulator[index].qty += 1;
      return accumulator;
    }

    return [
      ...accumulator,
      { name: item.category, qty: 1, },
    ];
  }, []);
};
