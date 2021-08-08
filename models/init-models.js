var DataTypes = require("sequelize").DataTypes;
var _data_uploaded = require("./data_uploaded");
var _user = require("./user");

function initModels(sequelize) {
  var data_uploaded = _data_uploaded(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    data_uploaded,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
