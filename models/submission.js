module.exports = function(sequelize, DataTypes) {
  var Submissions = sequelize.define("Submissions", {
    // Giving the Author model a name of type STRING
    userId: DataTypes.INTEGER,
    beerId: DataTypes.INTEGER,
    rankId: DataTypes.INTEGER,
    comment: DataTypes.STRING,
  },
      {
        timestamps: false
      }
 
  );
  return Submissions;
};
