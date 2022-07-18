const data = require("../data.json");
const sort = require("./sort");

module.exports = () => sort(data, 'desc');
