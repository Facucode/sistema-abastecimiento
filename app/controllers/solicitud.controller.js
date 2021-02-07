const db = require("../models");
const Solicitud = db.solicitudes;
const Articulo = db.articulos;

exports.createSolicitud = (solicitud) => {
    return Solicitud.create({
      division: solicitud.division,
      comprobante: solicitud.comprobante,
      numero: solicitud.numero,
      fecha: solicitud.fecha,
      costo: solicitud.costo,
      comentario: solicitud.comentario

    })
      .then((solicitud) => {
        console.log(">> Created solicitud: " + JSON.stringify(solicitud, null, 4));
        return solicitud;
      })
      .catch((err) => {
        console.log(">> Error while creating solicitud: ", err);
      });
  };


  exports.createArticulo = (solicitudId, Articulo) => {
    return Articulo.create({
      codigo: articulo.name,
      descripcion: articulo.text,
      solicitud:solicitudId,
      cpto: articulo.cpto,
      cantidad:articulo.cantidad,
      medida:articulo.medida,
      moneda:articulo.moneda,
      subtotal:articulo.subtotal,
      descuento:articulo.descuento,
      recargo:articulo.recargo,
      iva:articulo.iva,
      fechalimite:articulo.fechalimite,
    })
      .then((articulo) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return articulo;
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
  };

  exports.findSolicitudById = (solicitudId) => {
    return Solicitud.findByPk(solicitudId, { include: ["articulos"] })
      .then((solicitud) => {
        return solicitud;
      })
      .catch((err) => {
        console.log(">> Error while finding tutorial: ", err);
      });
  };

  exports.findArticuloById = (id) => {
    return Articulo.findByPk(id, { include: ["solicitud"] })
      .then((articulo) => {
        return articulo;
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
  };

  exports.findAll = () => {
    return Solicitud.findAll({
      include: ["articulos"],
    }).then((solicitudes) => {
      return solicitudes;
    });
  };