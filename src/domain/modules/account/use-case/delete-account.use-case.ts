import { Id } from '@domain/value-objects/id.value-object';

export abstract class DeleteAccountUseCase {
  abstract execute(accountId: Id): Promise<void>;
}
