const Sequelize = require("sequelize");
require("dotenv/config");
var db = {};

/*
db name=payments
username=root
password=
*/

const sequelize = new Sequelize("internathon", "admin", "dellhplinux!#123", {
  host: "internathon.cedjgswziywb.ap-south-1.rds.amazonaws.com",
  port: "3306",
  dialect: "mysql",
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
  operatorsAliases: false,
});

let models = [
  require("./models/data_uploaded.js"),
  require("./models/user.js"),
];

// Initialize models
models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

// Apply associations
Object.keys(db).forEach((key) => {
  if ("associate" in db[key]) {
    db[key].associate(db);
  }
});

//Apply relationships between tables

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
