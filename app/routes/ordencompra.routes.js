module.exports = app => {
    const tutorials = require("../controllers/ordencompra.controller.js");

    var router = require("express").Router();

    router.post("/ordencompra", ordencompra.create);

    router.get("/ordencompra", ordencompra.findAll);

    router.get("ordencompra/:id", ordencompra.findOne);

    // router.put("/:id", ordencompra.update);

    // router.delete("/:id", ordencompra.delete);

    // router.delete("/", ordencompra.deleteAll);

    app.use('/api/ordencompra', router);
};