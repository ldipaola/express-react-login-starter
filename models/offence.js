module.exports = function(sequelize, DataTypes) {
    const Offences = sequelize.define("Offences", {
      offence_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false
      },
      registration_number: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      speed_zone: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      detected_speed: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      alleged_speed: {
          type: DataTypes.STRING,
          allowNull: false,
      },
    });
    Offences.associate = function(models) {
      Offences.belongsTo(models.Owner, {
        foreignKey: {
          allowNull: false
        }
      });
  
      Offences.belongsTo(models.Accused, {
        foreignKey: {
          allowNull: false
        }
      });
    };
    return Offences;
  };