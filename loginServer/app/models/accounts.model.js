module.exports = (sequalize, Sequelize) => {
    const Accounts = sequalize.define("accounts", {
        email: {
            type: Sequelize.STRING
        },
        address: {
            type: Sequelize.STRING
        },
        id_user: {
            type: Sequelize.INTEGER
        }
    });

    return Accounts;
};