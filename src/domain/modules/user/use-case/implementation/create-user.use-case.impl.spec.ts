import { createUserMock } from '@domain/modules/user/entity/user.entity.spec';
import { createUserRepository } from '@domain/modules/user/repository/implementation/user.repository.impl.spec';
import { CreateUserUseCaseImpl } from '@domain/modules/user/use-case/implementation/create-user.use-case.impl';
import { UserRepository } from '@domain/modules/user/repository/user.repository';
import { UserAlreadyExistsError } from '@domain/modules/user/error/user-already-exists.error';

describe('CreateUserUseCaseImpl', () => {
  let userRepository: jest.Mocked<UserRepository>;
  let createUserUseCase: CreateUserUseCaseImpl;

  beforeEach(() => {
    userRepository = createUserRepository();
    createUserUseCase = new CreateUserUseCaseImpl(userRepository);
  });

  it('should create a user', async () => {
    const user = createUserMock();

    userRepository.getByEmail.mockResolvedValue(null);

    await createUserUseCase.execute(user);

    expect(userRepository.getByEmail).toHaveBeenCalledWith(user.getEmail());
    expect(userRepository.create).toHaveBeenCalledWith(user);
  });

  it('should throw an error if the user already exists', async () => {
    const user = createUserMock();

    userRepository.getByEmail.mockResolvedValue(user);

    await expect(createUserUseCase.execute(user)).rejects.toThrow(UserAlreadyExistsError);
  });
});
