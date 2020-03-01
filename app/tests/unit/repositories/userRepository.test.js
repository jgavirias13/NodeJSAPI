const UserRepository = require('../../../src/repositories/userRepository');
const mockingoose = require('mockingoose').default;
const UserModel = require('../../../src/models/userModel');
const {UserModelMock, UserRepositoryMock} = require('../../mocks');

let user = UserModelMock.user;
let users = UserModelMock.users;

describe("User Repository Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  })

  it('Should return a user by id', async () =>{
    const userCopy = {...user};
    delete userCopy.password;

    mockingoose(UserModel).toReturn(user, 'findOne');

    const userRepository = new UserRepository({UserModel});
    const expected = await userRepository.get(userCopy._id);

    expect(JSON.parse(JSON.stringify(expected))).toMatchObject(userCopy);
  });

});