import { User } from '@domain/modules/user/entity/user.entity';

export abstract class UpdateUserUseCase {
  abstract execute(user: User): Promise<void>;
}
