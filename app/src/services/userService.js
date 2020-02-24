const BaseService = require('./baseService');
const RequiredFieldException = require('../helpers/requieredFieldException');

let userRepository = null;

class UserService extends BaseService{
  constructor({UserRepository}){
    super(UserRepository);
    userRepository = UserRepository;
  }

  async getUserByUsername(username){
    if(!username){
      throw new RequiredFieldException('Username');
    }

    return await userRepository.getUserByUsername(username);
  }
}

module.exports = UserService;