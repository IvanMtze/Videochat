const db = require("../models");
const Videocalls = db.videocalls;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.url) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const videocall = {
        url: req.body.url,
        id_user: req.body.id_user,
    }

    // Save Action in the database
    Videocalls.create(videocall)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the videocall."
            });
        });
};//End


// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const url = req.query.url;
    var condition = url ? { url: { [Op.iLike]: `%${url}%` } } : null;

    Videocalls.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving videocall."
            });
        });
};//End


// Find a single Action with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Videocalls.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving videocall with id=" + id
            });
        });
};//End


// Update a Action by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Videocalls.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Videocall was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Videocall with id=${id}. Maybe Videocall was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating videocall with id=" + id
            });
        });
};//End

// Delete a Action with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Videocalls.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Videocall was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete videocall with id=${id}. Maybe videocall was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete videocall with id=" + id
            });
        });
};//End

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Videocalls.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Videocall were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all videocall."
            });
        });
};//End

