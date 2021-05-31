module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
          type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return Users;
};