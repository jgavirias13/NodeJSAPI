const express = require('express');

//Middlewares
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const notFoundMiddleware = require('../middlewares/notFoundMiddleware');
const errorMiddleware = require('../middlewares/errorMiddleware');
require('express-async-errors');

module.exports = ({ HomeRoutes }) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json());
  apiRoutes.use(cors());
  apiRoutes.use(helmet());
  apiRoutes.use(compression());

  //Configuracion de rutas
  apiRoutes.use('/Home', HomeRoutes);

  router.use('/v1/api', apiRoutes);

  //Middlewares
  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
};