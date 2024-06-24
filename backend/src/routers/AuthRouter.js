const express = require("express");
const userController = require("../controllers/UserController");

const AuthRouter = express.Router();

AuthRouter.post("/login", userController.login);
AuthRouter.post("/register", userController.register);

module.exports = AuthRouter;
