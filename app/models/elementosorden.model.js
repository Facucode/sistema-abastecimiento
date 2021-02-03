module.exports = (sequelize, DataTypes) => {
    const Elementoorden = sequelize.define("elementoorden", {
     codigo: {
        type: DataTypes.INTEGER
      },
      descripcion: {
        type: DataTypes.STRING
      },
      concepto: {
        type: DataTypes.STRING
      },
      cantidad: {
        type: DataTypes.FLOAT
      },
      bonific:{
          type:DataTypes.STRING
      },
      abrev:{
        type: DataTypes.STRING
      },
      medida: {
        type: DataTypes.STRING
      },
      subtotal:{type: DataTypes.FLOAT},
      descuento:{type: DataTypes.FLOAT},
      recargo:{type: DataTypes.FLOAT},
      iva:{type: DataTypes.FLOAT}
      /*
      fechalimite: {
        type: DataTypes.DATEONLY

      }*/
      // LISTA ?????????
    });
  
    return Comment;
  };