import { Id } from '@domain/value-objects/id.value-object';

export interface DeleteAccountUseCase {
  execute(accountId: Id): Promise<void>;
}