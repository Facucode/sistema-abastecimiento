module.exports = (sequelize, Sequelize) => {
    const Cotizacion = sequelize.define("cotizacion", {
      // Nuevo-Modificar-Duplicar??
        division: {
        type: Sequelize.STRING
      },
      prov: {
        type: Sequelize.STRING
      },
     comprobante: {
        type: Sequelize.INTEGER
      },
      numero:{
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATEONLY
      },
      centro:{
        type: Sequelize.STRING
      },
      comentario:{
        type: Sequelize.STRING
      }
      //JOIN SOLICITUD DE COMPRA
      //JOIN PROVEEDORES
      //ARTICULOS DEL PROVEEDOR / TODOS??


    });
  
    return Tutorial;
  };