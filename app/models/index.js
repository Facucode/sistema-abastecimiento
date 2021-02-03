const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

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

db.solicitudes = require("./solicitud.model.js")(sequelize, Sequelize);
db.elementosSolicitud = require("./elementoSolicitud.model.js")(sequelize, Sequelize);

db.solicitudes.hasMany(db.elementosSolicitud, { as: "elementosSolicitud" });
db.elementosSolicitud.belongsTo(db.solicitudes, {
  foreignKey: "solicitudId",
  as: "solicitud",
});
module.exports = db;