require('express-async-errors')
const express = require("express");
const app = express();
const PORT = 3332;
const AppError = require("./utils/AppError");
const routes = require("./routes");

app.use(express.json());
app.use(routes);

app.use((error, request, response, next) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message
      });
    }
  
    console.error(error);
  
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error'
    });
  })


app.listen(PORT, ()=>console.log('tudo certo :)'));