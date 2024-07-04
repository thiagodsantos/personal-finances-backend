import { CreateRevenueUseCase } from '@domain/modules/revenues/use-case/create-revenue.use-case';
import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';

export class CreateRevenueUseCaseImpl extends CreateRevenueUseCase {
  constructor(private readonly revenueRepository: RevenueRepository) {
    super();
  }

  public async execute(revenue: Revenue): Promise<void> {
    await this.revenueRepository.create(revenue);
  }
}
