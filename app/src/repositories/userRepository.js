const BaseRepository = require('./baseRepository');

let user = null;

class UserRepository extends BaseRepository {
  constructor({ UserModel }) {
    super(UserModel);
    user = UserModel;
  }

  async getUserByUserName(username) {
    return await user.findOne({ username: username });
  }
}

module.exports = UserRepository;
