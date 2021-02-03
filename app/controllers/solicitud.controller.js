const db = require("../models");
const Solicitud = db.solicitudes;
const ElementoSolicitud = db.elementosSolicitud;

exports.createSolicitud = (solicitud) => {
    return Solicitud.create({
      title: solicitud.title,
      description: solicitud.description,
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
      name: elementoSolicitud.name,
      text: elementoSolicitud.text,
      solicitudId: solicitudId,
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
    }).then((tutorials) => {
      return tutorials;
    });
  };