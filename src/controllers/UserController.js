const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const { hash } = require("bcrypt");

class UserController{
  async create(request, response){
    const {name, email, password, avatar} = request.body;

    const hashed = await hash(password, 8);

    const checkValidEmail = await knex("users").where({email}).first();

    if(checkValidEmail){

      throw new AppError("Já existe um usuário com esse e-mail");

    }else{

      const user = await knex("users").insert({
      name,
      email,
      password: hashed,
      avatar
      });

    response.json();
    }
  }
}

module.exports = UserController;