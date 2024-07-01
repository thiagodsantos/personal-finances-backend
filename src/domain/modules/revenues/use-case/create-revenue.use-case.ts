import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';

export interface CreateRevenueUseCase {
  execute(revenue: Revenue): Promise<void>;
}