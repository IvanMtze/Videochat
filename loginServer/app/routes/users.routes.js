module.exports = app => {
    const users = require("../controllers/users.controller.js");
    const { authJwt } = require("../middleware");


    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", users.create);

    // Retrieve all Tutorials
    router.get("/", users.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", users.findOne);

    // Update a Tutorial with id
    router.put("/:id", users.update);

    // Delete a Tutorial with id
    router.delete("/:id", users.delete);

    // Delete all Tutorials
    router.delete("/", users.deleteAll);

    //JWT Routes
    module.exports = function(app) {
        app.use(function(req, res, next) {
            res.header(
                "Access-Control-Allow-Headers",
                "x-access-token, Origin, Content-Type, Accept"
            );
            next();
        });

        app.get("/api/test/all", controller.allAccess);

        app.get(
            "/api/test/user",
            [authJwt.verifyToken],
            controller.userBoard
        );

        app.get(
            "/api/test/mod",
            [authJwt.verifyToken, authJwt.isModerator],
            controller.moderatorBoard
        );

        app.get(
            "/api/test/admin",
            [authJwt.verifyToken, authJwt.isAdmin],
            controller.adminBoard
        );
    };


    app.use("/api/users", router);
};
