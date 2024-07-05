import { createRevenueMock } from '@domain/modules/revenues/entity/revenue.entity.spec';
import { createRevenueRepositoryMock } from '@domain/modules/revenues/repository/implementation/revenue.repository.spec';
import { RevenueNotFoundError } from '@domain/modules/revenues/error/revenue-not-found.error';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';
import { UpdateRevenueUseCaseImpl } from '@domain/modules/revenues/use-case/implementation/update-revenue.use-case.impl';

describe('UpdateRevenueUseCaseImpl', () => {
  let revenueRepository: jest.Mocked<RevenueRepository>;
  let updateRevenueUseCaseImpl: UpdateRevenueUseCaseImpl;

  beforeEach(() => {
    revenueRepository = createRevenueRepositoryMock();
    updateRevenueUseCaseImpl = new UpdateRevenueUseCaseImpl(revenueRepository);
  });

  it('should update a revenue', async () => {
    const revenue = createRevenueMock();

    revenueRepository.getById.mockResolvedValue(revenue);

    await updateRevenueUseCaseImpl.execute(revenue);

    expect(revenueRepository.getById).toHaveBeenCalledWith(revenue.getId());
    expect(revenueRepository.update).toHaveBeenCalledWith(revenue);
  });

  it('should throw an error if revenue does not exist', async () => {
    const revenue = createRevenueMock();

    revenueRepository.getById.mockResolvedValue(null);

    await expect(updateRevenueUseCaseImpl.execute(revenue)).rejects.toThrow(RevenueNotFoundError);
    expect(revenueRepository.getById).toHaveBeenCalledWith(revenue.getId());
    expect(revenueRepository.update).not.toHaveBeenCalled();
  });
});
