module.exports = (sequelize, DataTypes) => {
    const ElementoSolicitud = sequelize.define("elementoSolicitud", {
     codigo: {
        type: DataTypes.INTEGER
      },
      descripcion: {
        type: DataTypes.STRING
      },
      cpto: {
        type: DataTypes.STRING
      },
      cantidad: {
        type: DataTypes.FLOAT
      },
      medida: {
        type: DataTypes.STRING
      },
      fechalimite: {
        type: DataTypes.DATEONLY

      }
    });
  
    return Comment;
  };