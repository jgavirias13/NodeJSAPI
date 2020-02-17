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

module.exports = container;