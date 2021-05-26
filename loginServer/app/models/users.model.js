module.exports = (sequalize, Sequelize) => {
  const Users = sequalize.define("users", {
      firstName: {
          type: Sequelize.STRING
      },
      lastName: {
          type: Sequelize.STRING
      },
      username: {
          type: Sequelize.STRING
      },
      password: {
          type: Sequelize.STRING
      }
  });

  return Users;

};