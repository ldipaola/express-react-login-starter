module.exports = function(sequelize, DataTypes) {
    const Owner = sequelize.define("Owner", {
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
    Owner.associate = function(models) {
        // Associating Owner with Offences
        Owner.hasMany(models.Offences, {
          onDelete: "cascade"
        });
      };
    return Owner;
  };