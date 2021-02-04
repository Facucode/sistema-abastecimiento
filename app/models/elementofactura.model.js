/*Codigo Interno| Descripcion  | Cantidad| Bonific|Medida|Lista | abrev|Moneda| Pr.Lista…*/
module.exports = (sequelize, DataTypes) => {
    const Elementofactura = sequelize.define("elementofactura", {
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
      medida: {
        type: DataTypes.STRING
      },
      moneda:{type: DataTypes.STRING}
      /*
      fechalimite: {
        type: DataTypes.DATEONLY

      }*/
    });
  
    return Elementofactura;
  };