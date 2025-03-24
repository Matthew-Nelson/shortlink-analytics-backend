'use strict';
module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define('Url', {
    long_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    short_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    custom_id: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Url.associate = function(models) {
    // associations can be defined here
  };

  return Url;
};