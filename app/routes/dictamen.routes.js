module.exports = app => {
    const tutorials = require("../controllers/dictamen.controller.js");

    var router = require("express").Router();

    router.post("/dictamen", dictamen.create);

    router.get("/dictamen", dictamen.findAll);

    router.get("dictamen/:id", dictamen.findOne);

    // router.put("/:id", dictamen.update);

    // router.delete("/:id", dictamen.delete);

    // router.delete("/", dictamen.deleteAll);

    app.use('/api/dictamen', router);
};