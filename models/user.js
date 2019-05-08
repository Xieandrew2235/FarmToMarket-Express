var bcrypt  = require('bcrypt');  
var Sequelize = require("sequelize");


module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    uuid: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      isUnique :true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      isUnique :true,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 6
      }
    },
    userType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      isUnique :true,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: false
    },   
    phone: {
      type: DataTypes.STRING,
      allowNull: false,    
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    
  });

  // methods ======================
    // generating pw hash
    User.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };
    // validate pw
    User.prototype.validPassword = function(password) {
      return bcrypt.compareSync(password, this.password);
    };


    User.associate = (models) => {
      User.belongsToMany(models.Produce, {
        through: models.FarmerProduce
    });

    // Users.belongsToMany(models.Produces, {
    //   through: models.storeProduces
    // });
    
   }
  return User;
};