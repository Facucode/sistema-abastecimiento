const db = require("../models");
const Factura = db.facturas;
//const ElementoFactura = db.elementosFactura;

exports.createFactura = (factura) => {
    return Factura.create({
      division: factura.title,
      prov: factura.description,
      comprobante:factura.comprobante,
      prefijo:factura.prefijo,
      lprecio:factura.lprecio,
      cpago:factura.cpago,
      moneda:factura.moneda,
      concepto:factura.concepto,
      numero:factura.numero,
      cai:factura.cai,
      vtocai:factura.vtocai,
      fecha:factura.fecha,
      fechaddjj:factura.fechaddjj,
      retiva:factura.retiva,
      provincia:factura.provincia

    })
      .then((factura) => {
        console.log(">> Created factura: " + JSON.stringify(factura, null, 4));
        return factura;
      })
      .catch((err) => {
        console.log(">> Error while creating factura: ", err);
      });
  };

/*
  exports.createElementoFactura = (facturaId, elementoFactura) => {
    return ElementoFactura.create({
      codigo: elementoFactura.codigo,
      descripcion: elementoFactura.descripcion,
      concepto:elementoFactura.concepto,
      cantidad:elementoFactura.cantidad,
      medida:elementoFactura.medida,
      moneda:elementoFactura.moneda,
      facturaId: facturaId,
    })
      .then((elementoFactura) => {
        console.log(">> Created element: " + JSON.stringify(elementoFactura, null, 4));
        return elementoFactura;
      })
      .catch((err) => {
        console.log(">> Error while creating element: ", err);
      });
  };
*/
  exports.findFacturaById = (facturaId) => {
    return Factura.findByPk(facturaId, { /*include: ["elementosFactura"] */})
      .then((factura) => {
        return factura;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };
/*
  exports.findElementoFacturaById = (id) => {
    return ElementoFactura.findByPk(id, { include: ["factura"] })
      .then((elementoFactura) => {
        return elementoFactura;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };
*/
  exports.findAll = () => {
    return Factura.findAll({
      //include: ["elementosFactura"],
    }).then((facturas) => {
      return facturas;
    });
  };