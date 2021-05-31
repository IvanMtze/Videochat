module.exports = (sequelize, Sequelize) => {
  const Actions = sequelize.define("actions", {
    action: {
      type: Sequelize.STRING
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
