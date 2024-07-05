import { Revenue } from '@domain/modules/revenues/entity/revenue.entity';
import { RevenueNotFoundError } from '@domain/modules/revenues/error/revenue-not-found.error';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';
import { UpdateRevenueUseCase } from '@domain/modules/revenues/use-case/update-revenue.use-case';

export class UpdateRevenueUseCaseImpl extends UpdateRevenueUseCase {
  constructor(private readonly revenueRepository: RevenueRepository) {
    super();
  }

  public async execute(revenue: Revenue): Promise<void> {
    const revenueExists = await this.revenueRepository.getById(revenue.getId());
    if (!revenueExists) {
      throw new RevenueNotFoundError(revenue.getId());
    }

    await this.revenueRepository.update(revenue);
  }
}
