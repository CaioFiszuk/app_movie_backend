const { Router } = require("express");
const usersRoutes = Router();

const UserController = require("../controllers/UserController");
const user = new UserController();

usersRoutes.post("/", user.create);

module.exports = usersRoutes;