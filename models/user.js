'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    age:DataTypes.INTEGER
  }, {
    classMethods: {
        associate: function (models) {
            // associations can be defined here
        }
    }
  });
  return User;
};