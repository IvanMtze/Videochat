module.exports = app => {
    const accounts = require("../controllers/accounts.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", accounts.create);

    // Retrieve all Tutorials
    router.get("/", accounts.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", accounts.findOne);

    // Update a Tutorial with id
    router.put("/:id", accounts.update);

    // Delete a Tutorial with id
    router.delete("/:id", accounts.delete);

    // Delete all Tutorials
    router.delete("/", accounts.deleteAll);

    app.use("/api/accounts", router);
};
