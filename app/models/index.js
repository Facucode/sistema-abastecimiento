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
db.remitocompras = require("./remitocompra.model.js")(sequelize, Sequelize);
db.ordencompras = require("./ordencompra.model.js")(sequelize, Sequelize);
db.pedidocotizaciones = require("./pedidocotizacion.model.js")(sequelize, Sequelize);
db.facturas = require("./factura.model.js")(sequelize, Sequelize);
db.dictamenes = require("./dictamen.model.js")(sequelize, Sequelize);
db.articulos =  require("./articulo.model.js")(sequelize, Sequelize);
db.proveedores =  require("./proveedor.model.js")(sequelize, Sequelize);




db.solicitudes.hasMany(db.articulos, { as: "articulos" });
db.articulos.belongsTo(db.solicitudes, {
  foreignKey: "articuloId",
  as: "solicitud",
});
module.exports = db;




db.proveedores.hasMany(db.articulos, { as: "articulos" });
db.articulos.belongsTo(db.proveedores, {
  foreignKey: "articuloId",
  as: "proveedor",
});
module.exports = db;

db.dictamenes.hasOne(remitos);
db.ordencompras.hasOne(pedidocotizaciones);
db.pedidocotizaciones.hasOne(solicitudes);
db.remitocompras.hasOne(ordencompras);

//Dictamen incluye remito de compra
//Remito de compra incluye Orden de Compra 
//Orden de compra incluye pedido cotizacion
//Pedido de cotizacion incluye solicitud de compra
