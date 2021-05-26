module.exports = (sequelize, Sequelize) => {
  const Actions = sequelize.define("actions", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    power: {
      type: Sequelize.BOOLEAN
    },
    id_video: {
      type: Sequelize.INTEGER
    },
    id_user: {
      type: Sequelize.INTEGER
    }
  });

  return Actions;
};
