import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';

export abstract class CreateRevenueUseCase {
  abstract execute(revenue: Revenue): Promise<void>;
}
