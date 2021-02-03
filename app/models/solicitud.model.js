module.exports = (sequelize, Sequelize) => {
    const Solicitud = sequelize.define("solicitud", {
      division: {
        type: Sequelize.STRING
      },
      comprobante: {
        type: Sequelize.STRING
      },
      numero: {
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


    });
  
    return Tutorial;
  };