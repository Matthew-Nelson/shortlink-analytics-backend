'use strict';
module.exports = (sequelize, DataTypes) => {
  const Click = sequelize.define('Click', {
    url_id: DataTypes.INTEGER,
    timestamp: DataTypes.DATE,
    location: DataTypes.STRING,
    referrer: DataTypes.TEXT
  }, {});
  Click.associate = function(models) {
    // associations can be defined here
    Click.belongsTo(models.Url, { foreignKey: 'url_id' });
  };
  return Click;
};