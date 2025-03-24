'use strict';
module.exports = (sequelize, DataTypes) => {
  const Click = sequelize.define('Click', {
    url_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Urls',
        key: 'id'
      }
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true
    },
    referrer: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  Click.associate = function(models) {
    // associations can be defined here
  };

  return Click;
};