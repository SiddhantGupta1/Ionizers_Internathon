const Sequelize = require("sequelize");
const db = {};
require("dotenv/config");
const sequelize = new Sequelize(process.env.db_name, db_user, db_password, {
  host: db_host,
  port: 3306,
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
  operatorsAliases: false,
});

const models = [
  require("./../models/data_uploaded.js"),
  require("./../models/user.js"),
];

models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db[seqModel.name] = seqModel;
});

//Apply associations
Object.keys(db).forEach((key) => {
  if ("associate" in db[key]) {
    db[key].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//Relations

module.exports = db;
