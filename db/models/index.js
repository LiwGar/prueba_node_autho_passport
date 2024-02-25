const { User, UserSchema } = require('./user.model');
const { Customer, CustomerSchema } = require('./customer.models');

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  Customer.associate(sequelize.models);
}

module.exports = setupModels;