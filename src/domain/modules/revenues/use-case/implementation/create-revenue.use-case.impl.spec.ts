import { createRevenueMock } from '@domain/modules/revenues/entity/revenue.entity.spec';
import { createRevenueRepositoryMock } from '@domain/modules/revenues/repository/implementation/revenue.repository.spec';
import { CreateRevenueUseCaseImpl } from '@domain/modules/revenues/use-case/implementation/create-revenue.use-case.impl';
import { RevenueRepository } from '@domain/modules/revenues/repository/revenue.repository';

describe('CreateRevenueUseCaseImpl', () => {
  let revenueRepository: jest.Mocked<RevenueRepository>;
  let createRevenueUseCaseimpl: CreateRevenueUseCaseImpl;

  beforeEach(() => {
    revenueRepository = createRevenueRepositoryMock();
    createRevenueUseCaseimpl = new CreateRevenueUseCaseImpl(revenueRepository);
  });

  it('should create a revenue', async () => {
    const revenue = createRevenueMock();

    await createRevenueUseCaseimpl.execute(revenue);

    expect(revenueRepository.create).toHaveBeenCalledWith(revenue);
  });
});
