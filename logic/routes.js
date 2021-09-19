const model = require("../schema/store");

exports.post = (req, res) => {
  const userData = new model({
    name: req.body.name,
    school: req.body.school,
    rank: req.body.rank,
  });
  userData
    .save()
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send({ mess: err.message }));
};

exports.getAll = (req, res) => {
  model
    .find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(400).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;

  model
    .findByIdAndDelete(id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send({ message: err.message }));
};

exports.getOne = (req, res) => {
  const id = req.params.id;
  model
    .findById(id)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(400).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;

  model
    .findByIdAndUpdate(id, {
      _id: id,
      name: req.body.name,
      school: req.body.school,
      rank: req.body.rank,
    })
    .then((data) => res.status(200).json({ message: "updated sucessfully..." }))
    .catch((err) => res.status(400).send({ message: err.message }));
};
