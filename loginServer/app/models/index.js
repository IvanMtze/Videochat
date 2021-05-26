const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.actions = require("./actions.model.js")(sequelize, Sequelize);
db.users = require("./users.model.js")(sequelize,Sequelize);
db.accounts = require("./accounts.model.js")(sequelize, Sequelize);
db.videocalls = require("./videocall.model.js")(sequelize, Sequelize);

module.exports = db;
