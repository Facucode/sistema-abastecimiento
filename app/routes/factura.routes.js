module.exports = app => {
    const tutorials = require("../controllers/factura.controller.js");

    var router = require("express").Router();

    router.post("/factura", factura.create);

    router.get("/factura", factura.findAll);

    router.get("factura/:id", factura.findOne);

    // router.put("/:id", factura.update);

    // router.delete("/:id", factura.delete);

    // router.delete("/", factura.deleteAll);

    app.use('/api/factura', router);
};