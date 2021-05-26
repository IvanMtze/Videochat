module.exports = app => {
    const videocall = require("../controllers/videocall.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", videocall.create);

    // Retrieve all Tutorials
    router.get("/", videocall.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", videocall.findOne);

    // Update a Tutorial with id
    router.put("/:id", videocall.update);

    // Delete a Tutorial with id
    router.delete("/:id", videocall.delete);

    // Delete all Tutorials
    router.delete("/", videocall.deleteAll);

    app.use("/api/videocall", router);
};
