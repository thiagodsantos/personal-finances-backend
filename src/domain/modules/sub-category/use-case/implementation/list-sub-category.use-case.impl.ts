import { ListSubCategoryUseCase } from '@domain/modules/sub-category/use-case/list-sub-category.use-case';
import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

export class ListSubCategoryUseCaseImpl extends ListSubCategoryUseCase {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {
    super();
  }

  async execute(): Promise<SubCategory[]> {
    return await this.subCategoryRepository.list();
  }
}
