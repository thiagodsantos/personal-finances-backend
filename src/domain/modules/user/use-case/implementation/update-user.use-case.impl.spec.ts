import { createUserMock } from '@domain/modules/user/entity/user.entity.spec';
import { createUserRepository } from '@domain/modules/user/repository/implementation/user.repository.impl.spec';
import { UserRepository } from '@domain/modules/user/repository/user.repository';
import { UpdateUserUseCaseImpl } from '@domain/modules/user/use-case/implementation/update-user.use-case.impl';

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
});
