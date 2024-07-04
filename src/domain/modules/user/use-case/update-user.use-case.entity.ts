import { User } from '@domain/modules/user/entity/user.entity';

export interface UpdateUserUseCase {
  execute(user: User): Promise<void>;
}
