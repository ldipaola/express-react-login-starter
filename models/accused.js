module.exports = function(sequelize, DataTypes) {
    const Accused = sequelize.define("Accused", {
      firstName: {
        type: DataTypes.STRING
      },
      lastName: {
        type: DataTypes.STRING
      },
      address: {
          type: DataTypes.STRING
      },
      age: {
          type: DataTypes.INTEGER
      },
      gender: {
          type: DataTypes.STRING
      }
    });
    Accused.associate = function(models) {
        // Associating offender with offence
        Accused.hasMany(models.Offences, {
          onDelete: "cascade"
        });
      };
    return Accused;
  };