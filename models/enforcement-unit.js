module.exports = function(sequelize, DataTypes) {
    const EnforcementUnit = sequelize.define("EnforcementUnit", {
      assigned_to: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      region: {
        type: DataTypes.STRING,
        allowNull: false
      },
      division: {
          type: DataTypes.STRING,
          allowNull: false,
      }
    });
    EnforcementUnit.associate = function(models) {
        EnforcementUnit.hasMany(models.Offences);
    };
    return EnforcementUnit;
  };