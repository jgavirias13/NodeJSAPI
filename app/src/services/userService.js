const BaseService = require('./baseService');

let userRepository = null;

class UserService extends BaseService{
  constructor({UserRepository}){
    super(UserRepository);
    this.userRepository = UserRepository;
  }

  async getUserByUsername(username){
    this.validarElemento(username, 'Username');

    return await userRepository.getUserByUsername(username);
  }
}

module.exports = UserService;