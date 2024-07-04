import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';

export abstract class UpdateRevenueUseCase {
  abstract execute(revenue: Revenue): Promise<void>;
}
