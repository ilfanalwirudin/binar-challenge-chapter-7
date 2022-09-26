"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class userGame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      userGame.hasOne(models.userBiodata),
        userGame.hasMany(models.userGameHistory);
    }
  }
  userGame.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "userGame",
    }
  );
  return userGame;
};
