import { createUserMock } from '@domain/modules/user/entity/user.entity.spec';
import { createUserRepository } from '@domain/modules/user/repository/implementation/user.repository.impl.spec';
import { UpdateUserUseCaseImpl } from '@domain/modules/user/use-case/implementation/update-user.use-case.impl';
import { UserNotFoundError } from '@domain/modules/user/error/user-not-found.error';
import { UserRepository } from '@domain/modules/user/repository/user.repository';

describe('UpdateUserUseCaseImpl', () => {
  let userRepository: jest.Mocked<UserRepository>;
  let updateUserUseCase: UpdateUserUseCaseImpl;

  beforeEach(() => {
    userRepository = createUserRepository();
    updateUserUseCase = new UpdateUserUseCaseImpl(userRepository);
  });

  it('should update a user', async () => {
    const user = createUserMock();

    await updateUserUseCase.execute(user);

    expect(userRepository.update).toHaveBeenCalledWith(user);
  });

  it('should throw an error if user does not exist', async () => {
    userRepository.getById.mockResolvedValue(null);

    const user = createUserMock();

    await expect(updateUserUseCase.execute(user)).rejects.toThrow(UserNotFoundError);
    expect(userRepository.getById).toHaveBeenCalledWith(user.getId());
    expect(userRepository.update).not.toHaveBeenCalled();
  });
});
