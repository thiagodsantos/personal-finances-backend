import { CategoryNotFoundError } from '@domain/modules/category/error/category-not-found.error';
import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { DeleteCategoryUseCase } from '@domain/modules/category/use-case/delete-category.use-case';
import { Id } from '@domain/value-objects/id.value-object';

export class DeleteCategoryUseCaseImpl extends DeleteCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {
    super();
  }

  public async execute(categoryId: Id): Promise<void> {
    const categoryExists = await this.categoryRepository.getById(categoryId);
    if (!categoryExists) {
      throw new CategoryNotFoundError(categoryId);
    }

    await this.categoryRepository.deleteById(categoryId);
  }
}
