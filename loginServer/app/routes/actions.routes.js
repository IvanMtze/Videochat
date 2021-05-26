module.exports = app => {
  const actions = require("../controllers/actions.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", actions.create);

  // Retrieve all Tutorials
  router.get("/", actions.findAll);

  // Retrieve all published Tutorials
  router.get("/published", actions.findAllPowerOn);

  // Retrieve a single Tutorial with id
  router.get("/:id", actions.findOne);

  // Update a Tutorial with id
  router.put("/:id", actions.update);

  // Delete a Tutorial with id
  router.delete("/:id", actions.delete);

  // Delete all Tutorials
  router.delete("/", actions.deleteAll);

  app.use("/api/actions", router);
};
