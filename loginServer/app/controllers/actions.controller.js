const db = require("../models");
const Action = db.actions;
const Op = db.Sequelize.Op;

// Create and Save a new Action
exports.create = (req, res) => {
  // Validate request
  if (!req.body.action) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Action
  const action = {
    action: req.body.action,
    id_video: req.body.id_video,
    id_user: req.body.id_user
  };

  // Save Action in the database
  Action.create(action)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Action."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const action = req.query.action;
  var condition = action ? { title: { [Op.iLike]: `%${action}%` } } : null;

  Action.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving actions."
      });
    });
};

// Find a single Action with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Action.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Action with id=" + id
      });
    });
};

// Update a Action by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Action.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Action was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update action with id=${id}. Maybe action was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Action with id=" + id
      });
    });
};

// Delete a Action with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Action.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Action was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete action with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Action with id=" + id
      });
    });
};

// Delete all actions from the database.
exports.deleteAll = (req, res) => {
  Action.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Actions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all actions."
      });
    });
};
