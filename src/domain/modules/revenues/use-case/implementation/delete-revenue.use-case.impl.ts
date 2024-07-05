import { DeleteRevenueUseCase } from '@domain/modules/revenues/use-case/delete-revenue.use-case';
import { Id } from '@domain/value-objects/id.value-object';
import { RevenueNotFoundError } from '@domain/modules/revenues/error/revenue-not-found.error';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';

export class DeleteRevenueUseCaseImpl extends DeleteRevenueUseCase {
  constructor(private readonly revenueRepository: RevenueRepository) {
    super();
  }

  public async execute(revenueId: Id): Promise<void> {
    const revenueExists = await this.revenueRepository.getById(revenueId);
    if (!revenueExists) {
      throw new RevenueNotFoundError(revenueId);
    }

    await this.revenueRepository.deleteById(revenueId);
  }
}
