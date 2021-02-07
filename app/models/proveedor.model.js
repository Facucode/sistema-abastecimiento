module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
      
        nombre: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
     
      //MAS DATOS DEL PROVEEDOR


    });
  
    return Proveedor;
  };