const express = require('express');
const morgan = require('morgan');

//Middlewares
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const notFoundMiddleware = require('../middlewares/notFoundMiddleware');
const errorMiddleware = require('../middlewares/errorMiddleware');
require('express-async-errors');

module.exports = ({
  HomeRoutes,
  IdeaRoutes,
  UserRoutes,
  CommentRoutes,
  AuthRoutes,
  Config
}) => {
  const router = express.Router();
  const apiRoutes = express.Router();

  apiRoutes.use(express.json());
  apiRoutes.use(cors());
  apiRoutes.use(helmet());
  apiRoutes.use(compression());

  if (Config.ENV == 'develop') {
    apiRoutes.use(morgan('combined'));
  }

  //Configuracion de rutas
  apiRoutes.use('/Home', HomeRoutes);
  apiRoutes.use('/user', UserRoutes);
  apiRoutes.use('/idea', IdeaRoutes);
  apiRoutes.use('/comment', CommentRoutes);
  apiRoutes.use('/auth', AuthRoutes);

  router.use('/v1/api', apiRoutes);

  //Middlewares
  router.use(notFoundMiddleware);
  router.use(errorMiddleware);

  return router;
};
