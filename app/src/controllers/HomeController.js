let homeService = null;

class HomeController{
  constructor({HomeService}){
    homeService = HomeService;
  }

  index(req, res){
    return res.send(homeService.index());
  }
}

module.exports = HomeController;