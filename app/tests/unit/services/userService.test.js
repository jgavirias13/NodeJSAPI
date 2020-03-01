const UserService = require('../../../src/services/userService');
const {UserRepositoryMock, UserModelMock} = require('../../mocks/index');
let user = UserModelMock.user;
let users = UserModelMock.users;

describe('User Service', async () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should find a user by id', async() => {
    const UserRepository = UserRepositoryMock;
    UserRepository.get.mockReturnValue(user);
    const userService = new UserService({UserRepository});
    const expected = await userService.get(user._id);
    expect(expected).toMatchObject(user);
  });
})