module.exports = (sequelize, DataTypes) => {
    const Elementocotizacion = sequelize.define("elementocotizacion", {
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
      }/*
      fechalimite: {
        type: DataTypes.DATEONLY

      }*/
    });
  
    return Comment;
  };