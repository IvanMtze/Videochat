module.exports = (sequalize, Sequelize) => {
    const Videocalls = sequalize.define("videocalls", {
        url: {
            type: Sequelize.STRING
        },
        id_user: {
            type: Sequelize.INTEGER
        }
    });

    return Videocalls;
};