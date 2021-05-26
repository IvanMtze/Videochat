const db = require("../models");
const Accounts = db.accounts;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate request
    if (!req.body.email) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const account = {
        email: req.body.email,
        address: req.body.address,
        id_user: req.body.id_user
    };

    Accounts.create(account)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the account."
            });
        });

};//end

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const email = req.query.email;
    var condition = email ? { email: { [Op.iLike]: `%${email}%` } } : null;

    Accounts.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving accounts."
            });
        });
};//End


// Find a single account with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Accounts.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving account with id=" + id
            });
        });
};//End

//Update an account by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Accounts.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Account was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Account with id=${id}. Maybe User was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating account with id=" + id
            });
        });
};//End


// Delete a Action with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Accounts.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Account was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete account with id=${id}. Maybe account was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete account with id=" + id
            });
        });
};//End


// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Accounts.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Accounts were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all users."
            });
        });
};//End


