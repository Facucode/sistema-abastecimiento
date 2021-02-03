module.exports = (sequelize, Sequelize) => {
    const Ordencompra = sequelize.define("ordencompra", {
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

      moneda:{
          type: Sequelize.INTEGER
      },
      numero:{
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATEONLY
      },

      //LISTA DE PRECIOS?????

      condicionpago:{
        type: Sequelize.STRING
      },

      comprador:{
        type: Sequelize.STRING

      },
      contacto:{
          type: Sequelize.STRING
      },
      centro:{
        type: Sequelize.STRING
      },
      comentario:{
        type: Sequelize.STRING
      }
      //JOIN PEDIDO COTIZACION
      //JOIN PROVEEDORES
      //ARTICULOS DEL PROVEEDOR / TODOS??


    });
  
    return Tutorial;
  };