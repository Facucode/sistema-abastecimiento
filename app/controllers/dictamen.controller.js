const db = require("../models");
const Dictamen = db.dictamenes;
//const ElementoDictamen = db.elementosDictamen;

exports.createDictamen = (dictamen) => {
    return Dictamen.create({
      division: dictamen.division,
      //prov: dictamen.prov,
      comprobante:dictamen.comprobante,
      moneda:dictamen.moneda,
      numero:dictamen.numero,
      fecha:dictamen.fecha,
      condicionpago:dictamen.condicionpago,
      centro:dictamen.centro,
      contacto:dictamen.contacto,
      comprador:dictamen.comprador,
      comentario:dictamen.comentario,

    })
      .then((dictamen) => {
        console.log(">> Created dictamen: " + JSON.stringify(dictamen, null, 4));
        return dictamen;
      })
      .catch((err) => {
        console.log(">> Error while creating dictamen: ", err);
      });
  };

/*
  exports.createElementoDictamen = (dictamenId, elementoDictamen) => {
    return ElementoDictamen.create({
      codigo: elementoDictamen.codigo,
      descripcion: elementoDictamen.descripcion,
      concepto:elementoDictamen.concepto,
      cantidad:elementoDictamen.cantidad,
      medida:elementoDictamen.medida,
      moneda:elementoDictamen.moneda,
      dictamenId: dictamenId,
    })
      .then((elementoDictamen) => {
        console.log(">> Created element: " + JSON.stringify(elementoDictamen, null, 4));
        return elementoDictamen;
      })
      .catch((err) => {
        console.log(">> Error while creating element: ", err);
      });
  };
*/
  exports.findDictamenById = (dictamenId) => {
    return Dictamen.findByPk(dictamenId, { /*include: ["elementosDictamen"] */})
      .then((dictamen) => {
        return dictamen;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };
/*
  exports.findElementoDictamenById = (id) => {
    return ElementoDictamen.findByPk(id, { include: ["dictamen"] })
      .then((elementoDictamen) => {
        return elementoDictamen;
      })
      .catch((err) => {
        console.log(">> Error while finding element: ", err);
      });
  };
*/
  exports.findAll = () => {
    return Dictamen.findAll({
      //include: ["elementosDictamen"],
    }).then((dictamenes) => {
      return dictamenes;
    });
  };