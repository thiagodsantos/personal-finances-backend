import { Id } from '@domain/value-objects/id.value-object';

export abstract class DeleteRevenueUseCase {
  abstract execute(revenueId: Id): Promise<void>;
}
