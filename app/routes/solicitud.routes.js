module.exports = app => {
    const tutorials = require("../controllers/solicitud.controller.js");

    var router = require("express").Router();

    router.post("/solicitud", solicitud.create);

    router.get("/solicitud", solicitud.findAll);

    router.get("solicitud/:id", solicitud.findOne);

    // router.put("/:id", solicitud.update);

    // router.delete("/:id", solicitud.delete);

    // router.delete("/", solicitud.deleteAll);

    app.use('/api/solicitud', router);
};