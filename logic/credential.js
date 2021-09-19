const model = require("../schema/credential");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signUp = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (!err) {
      const signUp = new model({
        userName: req.body.userName,
        password: hash,
      });
      signUp
        .save()
        .then((data) => res.status(200).send(data))
        .catch((err) => res.status(400).send({ message: err.message }));
    } else {
      console.log(err);
    }
  });
};

exports.signIn = (req, res) => {
  model
    .findOne({ userName: req.body.userName })
    .then((data) => {
      bcrypt.compare(req.body.password, data.password, (err, result) => {
        if (result) {
          const token = jwt.sign({ userName: req.body.userName }, "USER_NAME", {
            expiresIn: "1hr",
          });

          res
            .status(200)
            .json({ message: "password verified sucessfully", token: token });
        } else {
          res.status(400).json({ message: "wrong password" });
        }
        if (err) {
          console.log(err);
        }
      });
    })

    .catch((err) => res.status(400).send({ message: err.message }));
};
