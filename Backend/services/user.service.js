const userModel = require('../models/user.model');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
  if (!firstname || !email || !password) {
    throw new Error('First name, email, and password are required');
  }

  const user = await userModel.create({
    fullname: {
      firstname,
      lastname
    },
    email,
    password
  });

  return user;
}

// Return a Mongoose Query so callers can chain query helpers like `.select()`
module.exports.findUserByEmail = (email) => {
  return userModel.findOne({ email });
};
