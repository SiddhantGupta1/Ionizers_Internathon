const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    inc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    fname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    lname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "username_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    password: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "inc_id" },
        ]
      },
      {
        name: "username_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
