//Contenedor de inyeccion de dependencias
const { createContainer, asClass, asValue, asFunction } = require('awilix');

//Config
const config = require('../config/config');
const app = require('./index');

//Servicios
const HomeService = require('../services/homeService');

//Controladores
const HomeController = require('../controllers/HomeController');

//Routes
const HomeRoutes = require('../routes/HomeRoutes');
const IndexRoute = require('../routes/index');

//Models
const userModel = require('../models/userModel');
const ideaModel = require('../models/ideaModel');
const commentModel = require('../models/commentModel');

//Repositories
const userRepository = require('../repositories/userRepository');
const ideaRepository = require('../repositories/ideaRepository');
const commentRepository = require('../repositories/commentRepository');

const container = createContainer();

//Config
container.register({
  App: asClass(app).singleton(),
  IndexRoute: asFunction(IndexRoute).singleton(),
  Config: asValue(config)  
});

//Services
container.register({
  HomeService: asClass(HomeService).singleton()
});

//Controllers
container.register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton()
});

//Routes
container.register({
  HomeRoutes: asFunction(HomeRoutes).singleton()
});

//Models
container.register({
  UserModel: asValue(userModel),
  ideaModel: asValue(ideaModel),
  CommentModel: asValue(commentModel)
});

//Repositories
container.register({
  UserRepository: asClass(userRepository).singleton(),
  IdeaRepository: asClass(ideaRepository).singleton(),
  CommentRepository: asClass(commentRepository).singleton()
});

module.exports = container;