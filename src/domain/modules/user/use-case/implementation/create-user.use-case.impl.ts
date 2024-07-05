import { CreateUserUseCase } from '@domain/modules/user/use-case/create-user.use-case';
import { User } from '@domain/modules/user/entity/user.entity';
import { UserAlreadyExistsError } from '@domain/modules/user/error/user-already-exists.error';
import { UserRepository } from '@domain/modules/user/repository/user.repository';

export class CreateUserUseCaseImpl implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(user: User): Promise<void> {
    const userExists = await this.userRepository.getByEmail(user.getEmail());
    if (userExists) {
      throw new UserAlreadyExistsError(user.getEmail());
    }

    await this.userRepository.create(user);
  }
}
