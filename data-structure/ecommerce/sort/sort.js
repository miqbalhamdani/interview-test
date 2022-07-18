module.exports = (array, type) => {
  const result = [...array];

  return result.sort((a, b) => {
    if (a.price < b.price)
      return type === 'asc' ? -1 : 1;

    if (a.price > b.price)
      return type === 'asc' ? 1 : -1;

    return 0;
  });
};
