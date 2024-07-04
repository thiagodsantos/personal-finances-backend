import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { DeleteCategoryUseCase } from '@domain/modules/category/use-case/delete-category.use-case';

import { Id } from '@domain/value-objects/id.value-object';

export class DeleteCategoryUseCaseImpl extends DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async execute(categoryId: Id): Promise<void> {
    await this.categoryRepository.delete(categoryId);
  }
}
