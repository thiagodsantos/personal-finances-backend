import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';
import { UpdateRevenueUseCase } from '@domain/modules/revenues/use-case/update-revenue.use-case';

export class UpdateRevenueUseCaseImpl extends UpdateRevenueUseCase {
  constructor(private readonly revenueRepository: RevenueRepository) {
    super();
  }

  public async execute(revenue: Revenue): Promise<void> {
    await this.revenueRepository.update(revenue);
  }
}
