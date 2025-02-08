# Movies App

This project is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and SQLite. It provides basic functionalities to manage movies in a database.

## Features
- **Create User (`create()`)** - Adds a new user to the database.
- **Create Movie (`create()`)** - Adds a new movie to the database.
- **List Movies (`index()`)** - Lists all movies from database to the main page.
- **Delete Movie (`delete()`)** - Deletes a movie from database.
- **Show Movie (`show()`)** - Show all the details of a movie.

## Tech Stack
- **Node.js** - JavaScript runtime for building the backend.
- **Express.js** - Fast and lightweight web framework.
- **SQLite** - Relational database for storing user data.
- **Knex.js** - SQL query builder for easier database interactions.

## Installation & Usage

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/CaioFiszuk/app_movie_backend
   ```

2. Install dependencies:
```sh   
  npm install
```

3. Run migrations to set up the database schema:
```sh
  npx knex migrate:latest
```

4. Start the server:
```sh
  npm run serve
```  

### API Endpoints
| Method | Endpoint    | Description                |
|--------|------------ |----------------------------|
| POST   | `/users`    | Create a new user          |
| GET    | `/movies`   | List all movies            |
| GET    | `/movies/:id` | Get a movie by ID        |
| POST   | `/movies/:user_id` | Create a new movie by user id  |
| DELETE | `/movies/:id` | Delete movie by ID       |


### License
This project is licensed under the MIT License.
