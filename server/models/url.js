module.exports = (sequelize, DataTypes) => {
  var Url = sequelize.define('Url', {
    longUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    suspect: DataTypes.BOOLEAN
  }, {})
  return Url
};
