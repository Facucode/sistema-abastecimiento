/*Division|C/Cto| Fecha| fec DDJJ| 
Proveedor| % Ret IVA|pcia|
Comprobante|prefijo|nro| nro CAI| vto CAI|
L/Precio|C/Pago| moneda| deposito| fact[Manual O/compra/Rto]|%Fact|Vto |Concepto|Selección de articulos[por proveedor| todos]
*/
module.exports = (sequelize, Sequelize) => {
    const Factura = sequelize.define("factura", {
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
      prefijo:{type: Sequelize.STRING},
      lprecio:{type: Sequelize.FLOAT},
      cpago:{type: Sequelize.FLOAT},
      moneda:{
          type: Sequelize.INTEGER
      },
      concepto:{
        type: Sequelize.STRING
      },
      numero:{
        type: Sequelize.INTEGER
      },
      cai:{
          type:Sequelize.INTEGER
      },
      vtocai:{
        type: Sequelize.INTEGER
      },    
      fecha: {
        type: Sequelize.DATEONLY
      },
      fechaddjj:{
        type: Sequelize.DATEONLY
      },
      retiva:{
        type: Sequelize.FLOAT
      },
      provincia:{
        type: Sequelize.STRING
      }

      //LISTA DE PRECIOS?????

      
      //JOIN REMITO DE COMPRA (FECHA COMPROBANTE NUMERO PROVEEDOR DEPOSITO)
      //JOIN PROVEEDORES
      //ARTICULOS DEL PROVEEDOR / TODOS??


    });
  
    return Tutorial;
  };