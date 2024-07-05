import { UpdateUserUseCase } from '@domain/modules/user/use-case/update-user.use-case';
import { User } from '@domain/modules/user/entity/user.entity';
import { UserNotFoundError } from '@domain/modules/user/error/user-not-found.error';
import { UserRepository } from '@domain/modules/user/repository/user.repository';

export class UpdateUserUseCaseImpl implements UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: User): Promise<void> {
    const userExists = await this.userRepository.getById(user.getId());
    if (!userExists) {
      throw new UserNotFoundError(user.getEmail());
    }

    await this.userRepository.update(user);
  }
}
