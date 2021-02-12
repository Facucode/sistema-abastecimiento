module.exports = app => {
    const tutorials = require("../controllers/pedidocotizacion.controller.js");

    var router = require("express").Router();

    router.post("/pedidocotizacion", pedidocotizacion.create);

    router.get("/pedidocotizacion", pedidocotizacion.findAll);

    router.get("pedidocotizacion/:id", pedidocotizacion.findOne);

    // router.put("/:id", pedidocotizacion.update);

    // router.delete("/:id", pedidocotizacion.delete);

    // router.delete("/", pedidocotizacion.deleteAll);

    app.use('/api/pedidocotizacion', router);
};