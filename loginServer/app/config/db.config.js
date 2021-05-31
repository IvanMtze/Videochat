module.exports = {
  HOST: "localhost",
  USER: "admin",
  PASSWORD: "admin",
  DB: "meetings_db",
  dialect: "postgres",
  port: 5434,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
