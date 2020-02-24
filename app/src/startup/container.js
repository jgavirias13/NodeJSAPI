//Contenedor de inyeccion de dependencias
const { createContainer, asClass, asValue, asFunction } = require('awilix');

//Config
const config = require('../config/config');
const app = require('./index');

//Servicios
const HomeService = require('../services/homeService');
const UserService = require('../services/userService');
const IdeaService = require('../services/ideaService');
const CommentService = require('../services/commentService');
const AuthService = require('../services/authService');

//Controladores
const HomeController = require('../controllers/HomeController');
const IdeaController = require('../controllers/ideaController');
const UserController = require('../controllers/userController');
const CommentController = require('../controllers/commentsController');
const AuthController = require('../controllers/authController');

//Routes
const HomeRoutes = require('../routes/HomeRoutes');
const IndexRoute = require('../routes/index');
const UserRoutes = require('../routes/UserRoutes');
const IdeaRoutes = require('../routes/IdeaRoutes');
const CommentRoutes = require('../routes/CommentRoutes');
const AuthRoutes = require('../routes/AuthRoutes');

//Models
const userModel = require('../models/userModel');
const ideaModel = require('../models/ideaModel');
const commentModel = require('../models/commentModel');

//Repositories
const userRepository = require('../repositories/userRepository');
const ideaRepository = require('../repositories/ideaRepository');
const commentRepository = require('../repositories/commentRepository');

//Exceptions
const notFoundException = require('../helpers/notFoundException');
const requiredFieldException = require('../helpers/requieredFieldException');

const container = createContainer();

//Config
container.register({
  App: asClass(app).singleton(),
  IndexRoute: asFunction(IndexRoute).singleton(),
  Config: asValue(config)  
});

//Services
container.register({
  HomeService: asClass(HomeService).singleton(),
  IdeaService: asClass(IdeaService).singleton(),
  UserService: asClass(UserService).singleton(),
  CommentService: asClass(CommentService).singleton(),
  AuthService: asClass(AuthService).singleton()
});

//Controllers
container.register({
  HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  CommentController: asClass(CommentController).singleton(),
  UserController: asClass(UserController).singleton(),
  IdeaController: asClass(IdeaController).singleton(),
  AuthController: asClass(AuthController).singleton()
});

//Routes
container.register({
  HomeRoutes: asFunction(HomeRoutes).singleton(),
  UserRoutes: asFunction(UserRoutes).singleton(),
  IdeaRoutes: asFunction(IdeaRoutes).singleton(),
  CommentRoutes: asFunction(CommentRoutes).singleton(),
  AuthRoutes: asFunction(AuthRoutes).singleton()
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

//Exceptions
container.register({
  NotFoundException: asClass(notFoundException),
  RequiredFieldException: asClass(requiredFieldException)
})

module.exports = container;