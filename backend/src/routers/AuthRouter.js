const express = require("express");
const userController = require("../controllers/UserController");

const AuthRouter = express.Router();

AuthRouter.post("/login", userController.login);
AuthRouter.post("/register", userController.register);
AuthRouter.post("/resetPassword", userController.resetPassword);
AuthRouter.post("/updatePassword", userController.updatePassword);




module.exports = AuthRouter;
