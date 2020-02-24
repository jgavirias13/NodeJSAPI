const jwtHelper = require('../helpers/jwtHelper');
const userService = null;
const DuplicatedException = require('../helpers/duplicatedException');
const NotFoundException = require('../helpers/notFoundException');
const InvalidPasswordException = require('../helpers/invalidPasswordException');


class AuthService{
  constructor({UserService}){
    userService = UserService;
  }

  async signUp(user){
    const username = user.username;
    const userExist = await userService.getUserByUsername(username);
    if(userExist){
      throw new DuplicatedException('Username');
    }

    return await userService.create(user);
  }

  async signIn(user){
    const username = user.username;
    const password = user.password;

    const userExist = await userService.getUserByUsername(username);
    if(!userExist){
      throw new NotFoundException('User');
    }

    const validPassword = userExist.comparePassword(password);

    if(!validPassword){
      throw new InvalidPasswordException();
    }

    const userToEncode = {
      username: userExist.username,
      id: userExist._id
    };

    const token = jwtHelper.generateToken(userToEncode);

    return {token, user: userExist};
  }
}

module.exports = AuthService;