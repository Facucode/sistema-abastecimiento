const db = require("../models");
const Solicitud = db.solicitudes;
const ElementoSolicitud = db.elementosSolicitud;

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


  exports.createElementoSolicitud = (solicitudId, elementoSolicitud) => {
    return ElementoSolicitud.create({
      codigo: elementoSolicitud.name,
      descripcion: elementoSolicitud.text,
      solicitud:solicitudId,
      cpto: elementoSolicitud,
      cantidad:elementoSolicitud,
      medida:elementoSolicitud,
      fechalimite:elementoSolicitud
    })
      .then((elementoSolicitud) => {
        console.log(">> Created comment: " + JSON.stringify(comment, null, 4));
        return elementoSolicitud;
      })
      .catch((err) => {
        console.log(">> Error while creating comment: ", err);
      });
  };

  exports.findSolicitudById = (solicitudId) => {
    return Solicitud.findByPk(solicitudId, { include: ["elementosSolicitud"] })
      .then((solicitud) => {
        return solicitud;
      })
      .catch((err) => {
        console.log(">> Error while finding tutorial: ", err);
      });
  };

  exports.findElementoSolicitudById = (id) => {
    return ElementoSolicitud.findByPk(id, { include: ["solicitud"] })
      .then((elementoSolicitud) => {
        return elementoSolicitud;
      })
      .catch((err) => {
        console.log(">> Error while finding comment: ", err);
      });
  };

  exports.findAll = () => {
    return Solicitud.findAll({
      include: ["elementosSolicitud"],
    }).then((solicitudes) => {
      return solicitudes;
    });
  };