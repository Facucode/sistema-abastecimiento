module.exports = (sequelize, DataTypes) => {
    const Articulo = sequelize.define("articulo", {
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
      moneda:{type: DataTypes.STRING},

      fechalimite: {
        type: DataTypes.DATEONLY

      },
      subtotal:{type: DataTypes.FLOAT},
      descuento:{type: DataTypes.FLOAT},
      recargo:{type: DataTypes.FLOAT},
      iva:{type: DataTypes.FLOAT}
    });
  
    return Articulo; };