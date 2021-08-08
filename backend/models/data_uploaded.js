const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data_uploaded', {
    inc_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uploaded_by: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    location_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    geotags: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    file_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    file_location: {
      type: DataTypes.STRING(1024),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'data_uploaded',
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
    ]
  });
};
