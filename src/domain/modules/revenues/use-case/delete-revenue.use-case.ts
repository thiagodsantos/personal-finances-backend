import { Id } from '@domain/value-objects/id.value-object';

export interface DeleteRevenueUseCase {
  execute(revenueId: Id): Promise<void>;
}