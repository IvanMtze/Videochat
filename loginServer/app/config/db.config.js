module.exports = {
  HOST: "ec2-54-152-185-191.compute-1.amazonaws.com",
  USER: "lvzdskjvalgjsu",
  PASSWORD: "907c2250751e5a552dc324ed62882a52750426f6f103baea6dcdc3885df1872a",
  DB: "da5jqd9md1c9lg",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
