const { Router } = require("express");
const routes = Router();
const movieRouter = require("./movies.routes");
const userRouter = require("./users.routes");

routes.use("/movies", movieRouter);
routes.use("/users", userRouter);

module.exports = routes;