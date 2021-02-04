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
db.remitocompras=require("./remitocompra.model.js")(sequelize, Sequelize);
db.ordencompras=require("./ordencompra.model.js")(sequelize, Sequelize);
db.pedidocotizaciones=require("./pedidocotizacion.model.js")(sequelize, Sequelize);
db.facturas=require("./factura.model.js")(sequelize, Sequelize);
db.dictamenes=require("./dictamen.model.js")(sequelize, Sequelize);
db.elementosremitocompra=require("./elementoremitocompra.model.js")(sequelize, Sequelize);
db.elementosorden=require("./elementosorden.model.js")(sequelize, Sequelize);
db.elementoscotizacion=require("./elementocotizacion.model.js")(sequelize, Sequelize);
db.elementosfactura=require("./elementofactura.model.js")(sequelize, Sequelize);
//db.elementosdictamen




db.solicitudes.hasMany(db.elementosSolicitud, { as: "elementosSolicitud" });
db.elementosSolicitud.belongsTo(db.solicitudes, {
  foreignKey: "solicitudId",
  as: "solicitud",
});
module.exports = db;

db.facturas.hasMany(db.elementosFactura, { as: "elementosFactura" });
db.elementosFactura.belongsTo(db.facturas, {
  foreignKey: "facturaId",
  as: "factura",
});
module.exports = db;


//Hacer lo mismo con las demas tablas 1 a M