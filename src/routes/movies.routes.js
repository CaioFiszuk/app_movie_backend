const { Router } = require("express");
const MovieController = require("../controllers/MovieController");

const movieRoutes = Router();
const movie = new MovieController();

movieRoutes.get("/", movie.index);
movieRoutes.delete("/:id", movie.delete);
movieRoutes.get("/:id", movie.show);
movieRoutes.post("/:user_id", movie.create);

module.exports = movieRoutes;