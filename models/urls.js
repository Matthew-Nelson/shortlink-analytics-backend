'use strict';
module.exports = (sequelize, DataTypes) => {
  const Url = sequelize.define('Url', {
    long_url: DataTypes.TEXT,
    short_id: DataTypes.STRING,
    custom_id: DataTypes.STRING,
    created_at: DataTypes.DATE
  }, {});
  Url.associate = function(models) {
    // associations can be defined here
  };
  return Url;
};