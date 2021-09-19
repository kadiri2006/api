const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "USER_NAME", (err, decoded) => {
    if (!err) {
      decoded.userName === req.body.userName
        ? next()
        : res.status(400).json({ message: "provided wrong userName" });
    } else {
      console.log(err);
    }
  });
};
