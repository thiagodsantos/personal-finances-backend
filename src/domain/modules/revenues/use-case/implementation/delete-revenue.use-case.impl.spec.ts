import { createRevenueMock } from '@domain/modules/revenues/entity/revenue.entity.spec';
import { createRevenueRepositoryMock } from '@domain/modules/revenues/repository/implementation/revenue.repository.spec';
import { DeleteRevenueUseCaseImpl } from '@domain/modules/revenues/use-case/implementation/delete-revenue.use-case.impl';
import { RevenueNotFoundError } from '@domain/modules/revenues/error/revenue-not-found.error';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';

describe('DeleteRevenueUseCaseImpl', () => {
  let revenueRepository: jest.Mocked<RevenueRepository>;
  let deleteRevenueUseCaseImpl: DeleteRevenueUseCaseImpl;

  beforeEach(() => {
    revenueRepository = createRevenueRepositoryMock();
    deleteRevenueUseCaseImpl = new DeleteRevenueUseCaseImpl(revenueRepository);
  });

  it('should delete a revenue', async () => {
    const revenue = createRevenueMock();

    revenueRepository.getById.mockResolvedValue(revenue);

    await deleteRevenueUseCaseImpl.execute(revenue.getId());

    expect(revenueRepository.getById).toHaveBeenCalledWith(revenue.getId());
    expect(revenueRepository.deleteById).toHaveBeenCalledWith(revenue.getId());
  });

  it('should throw an error if revenue does not exist', async () => {
    const revenue = createRevenueMock();

    revenueRepository.getById.mockResolvedValue(null);

    await expect(deleteRevenueUseCaseImpl.execute(revenue.getId())).rejects.toThrow(
      RevenueNotFoundError
    );
    expect(revenueRepository.getById).toHaveBeenCalledWith(revenue.getId());
    expect(revenueRepository.deleteById).not.toHaveBeenCalled();
  });
});
