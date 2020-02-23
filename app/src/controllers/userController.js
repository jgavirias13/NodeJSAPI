let userService = null;

class UserController{
  constructor({UserService}){
    userService = UserService;
  }

  async get(req, res){
    const userId = req.params.userId;
    const user = await userService.get(userId);

    return res.send(user);
  }

  async getAll(req, res){
    const users = await userService.getAll();

    return res.send(users);
  }

  async update(req, res){
    const body = req.body;
    const userId = req.params.userId;
    const updateUser = userService.update(userId, body);
    
    return res.send(updateUser);
  }

  async delete(req, res){
    const userId = req.params.userId;
    const deletedUser = userService.delete(userId);

    return res.send(deletedUser);
  }
}

module.exports = UserController;