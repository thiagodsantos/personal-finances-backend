import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';

export interface UpdateRevenueUseCase {
  execute(revenue: Revenue): Promise<void>;
}
