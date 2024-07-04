import { DeleteRevenueUseCase } from '@domain/modules/revenues/use-case/delete-revenue.use-case';
import { Id } from '@domain/value-objects/id.value-object';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';

export class DeleteRevenueUseCaseImpl extends DeleteRevenueUseCase {
  constructor(private readonly revenueRepository: RevenueRepository) {
    super();
  }

  public async execute(revenueId: Id): Promise<void> {
    await this.revenueRepository.deleteById(revenueId);
  }
}
