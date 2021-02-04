const db = require("../models");
const Factura = db.facturas;
const ElementoFactura = db.elementosFactura;

exports.createFactura = (factura) => {
    return Factura.create({
      title: factura.title,
      description: factura.description,
    })
      .then((factura) => {
        console.log(">> Created factura: " + JSON.stringify(factura, null, 4));
        return factura;
      })
      .catch((err) => {
        console.log(">> Error while creating factura: ", err);
      });
  };


  exports.createElementoFactura = (facturaId, elementoFactura) => {
    return ElementoFactura.create({
      name: elementoFactura.name,
      text: elementoFactura.text,
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

  exports.findFacturaById = (facturaId) => {
    return Factura.findByPk(facturaId, { include: ["elementosFactura"] })
      .then((factura) => {
        return factura;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };

  exports.findElementoFacturaById = (id) => {
    return ElementoFactura.findByPk(id, { include: ["factura"] })
      .then((elementoFactura) => {
        return elementoFactura;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };

  exports.findAll = () => {
    return Factura.findAll({
      include: ["elementosFactura"],
    }).then((facturas) => {
      return facturas;
    });
  };