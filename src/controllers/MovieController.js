const knex = require("../database/knex");

class MovieController{
  async index(request, response){
    const movies = await knex("movies");

    response.json(movies);
  }

  async delete(request, response){
    const {id} = request.params;

    await knex("movies").where({id}).delete();

    response.json();
  }

  async show(request, response){

    const {id} = request.params;

    const movie = await knex("movies").where({id}).first();
    const tags = await knex("tags").where({movie_id: id}).orderBy("tag_name");

    if(movie == undefined){
      response.status(404);
    }

    return response.json({
      ...movie,
      tags
    });
    
  }

  async create(request, response){
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;

    const [movie_id] = await knex("movies").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = tags.map(tag_name=>{
      return{
        movie_id,
        user_id,
        tag_name
      }
    });

    await knex("tags").insert(tagsInsert);

    response.json();
    
  }
}

module.exports = MovieController;