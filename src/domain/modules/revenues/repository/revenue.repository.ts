import { Id } from '@domain/value-objects/id.value-object';
import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';

export abstract class RevenueRepository {
  abstract create(revenue: Revenue): Promise<void>;
  abstract deleteById(revenue: Id): Promise<void>;
  abstract getById(id: Id): Promise<Revenue | null>;
  abstract update(revenue: Revenue): Promise<void>;
}
