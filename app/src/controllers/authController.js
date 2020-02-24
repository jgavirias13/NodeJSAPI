let authService = null;

class AuthController{
  constructor({AuthService}){
    authService = AuthService;
  }

  async signUp(req, res){
    const body = req.body;
    const user = await authService.signUp(body);
    res.status(201).send(user);
  }

  async signIn(req, res){
    const body = req.body;
    const userAuthenticated = await authService.signIn(body);
    return res.send(userAuthenticated);
  }
}

module.exports = AuthController;