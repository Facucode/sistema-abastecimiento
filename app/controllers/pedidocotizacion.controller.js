const db = require("../models");
const Pedidocotizacion = db.pedidoscotizacion;
//const ElementoCotizacion = db.elementosCotizacion;

exports.createPedidocotizacion = (pedidocotizacion) => {
    return Pedidocotizacion.create({
      division: pedidocotizacion.division,
      comprobante: pedidocotizacion.comprobante,
      numero: pedidocotizacion.numero,
      fecha: pedidocotizacion.fecha,
      centro: pedidocotizacion.numero,
      comentario: pedidocotizacion.comentario,
    })
      .then((pedidocotizacion) => {
        console.log(">> Created pedidocotizacion: " + JSON.stringify(pedidocotizacion, null, 4));
        return pedidocotizacion;
      })
      .catch((err) => {
        console.log(">> Error while creating pedidocotizacion: ", err);
      });
  };

/*
  exports.createElementoCotizacion = (pedidocotizacionId, elementoCotizacion) => {
    return ElementoCotizacion.create({
      name: elementoCotizacion.name,
      text: elementoCotizacion.text,
      pedidocotizacionId: pedidocotizacionId,
    })
      .then((elementoCotizacion) => {
        console.log(">> Created element: " + JSON.stringify(elementoCotizacion, null, 4));
        return elementoCotizacion;
      })
      .catch((err) => {
        console.log(">> Error while creating element: ", err);
      });
  };
*/
  exports.findPedidocotizacionById = (pedidocotizacionId) => {
    return Pedidocotizacion.findByPk(pedidocotizacionId, {/* include: ["elementosCotizacion"] */})
      .then((pedidocotizacion) => {
        return pedidocotizacion;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };
/*
  exports.findElementoCotizacionById = (id) => {
    return ElementoCotizacion.findByPk(id, { include: ["pedidocotizacion"] })
      .then((elementoCotizacion) => {
        return elementoCotizacion;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };
*/
  exports.findAll = () => {
    return Pedidocotizacion.findAll({
     /* include: ["elementosCotizacion"],*/
    }).then((pedidoscotizacion) => {
      return pedidoscotizacion;
    });
  };