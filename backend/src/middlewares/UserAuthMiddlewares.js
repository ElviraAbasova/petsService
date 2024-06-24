const jwt = require("jsonwebtoken");

const UserAuthMiddlewares = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = UserAuthMiddlewares;
