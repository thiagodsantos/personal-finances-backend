import { DeleteSubCategoryUseCase } from '../delete-revenue.use-case';
import { Id } from '@domain/value-objects/id.value-object';
import { SubCategoryNotFoundError } from '@domain/modules/sub-category/error/sub-category-not-found.error';
import { SubCategoryRepository } from '@domain/modules/sub-category/repository/sub-category.repository';

export class DeleteSubCategoryUseCaseImpl extends DeleteSubCategoryUseCase {
  constructor(private readonly subCategoryRepository: SubCategoryRepository) {
    super();
  }

  async execute(subCategoryId: Id): Promise<void> {
    const revenue = await this.subCategoryRepository.getById(subCategoryId);
    if (!revenue) {
      throw new SubCategoryNotFoundError(subCategoryId);
    }

    await this.subCategoryRepository.deleteById(subCategoryId);
  }
}
