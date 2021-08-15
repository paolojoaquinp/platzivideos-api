const express = require('express');
const app = express();

// DEBUG!!!!!

const { config } = require('./config/index');
const moviesApi = require('./routes/movies.js');

const { logErrors, wrapErrors,errorHandler } = require('./utils/middleware/errorHandlers.js');
const notFunctionHandler = require('./utils/middleware/notFoundHandler');


app.use(express.json());

// routes
moviesApi(app);

// Catch 404 Caputurar error 404
app.use(notFunctionHandler);

// Logger
// app.use(morgan('combined'), {
//     stream: accessLogStream
// });

// Error midldlewares (manejadores de errores)
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// app.listen(config.port, () => {
//     console.log(`Listening http://localhost:${config.port}`);
// });

 app.listen(config.port, function() {
     const debug = require('debug')('app:server');
     debug(`Listening http://localhost:${config.port}`);
 });