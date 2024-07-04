import { User } from '@domain/modules/user/entity/user.entity';

export abstract class CreateUserUseCase {
  abstract execute(user: User): Promise<void>;
}
