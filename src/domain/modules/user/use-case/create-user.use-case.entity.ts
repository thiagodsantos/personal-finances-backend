import { User } from '@domain/modules/user/entity/user.entity';

export interface CreateUserUseCase {
  execute(user: User): Promise<void>;
}