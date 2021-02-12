module.exports = app => {
    const tutorials = require("../controllers/remitocompra.controller.js");

    var router = require("express").Router();

    router.post("/remitocompra", remitocompra.create);

    router.get("/remitocompra", remitocompra.findAll);

    router.get("remitocompra/:id", remitocompra.findOne);

    // router.put("/:id", remitocompra.update);

    // router.delete("/:id", remitocompra.delete);

    // router.delete("/", remitocompra.deleteAll);

    app.use('/api/remitocompra', router);
};