import { Category } from '@domain/modules/category/entity/category.entity';
import { CategoryNotFoundError } from '@domain/modules/category/error/category-not-found.error';
import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { UpdateCategoryUseCase } from '@domain/modules/category/use-case/update-category.use-case';

export class UpdateCategoryUseCaseImpl extends UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {
    super();
  }

  public async execute(category: Category): Promise<void> {
    const categoryExists = await this.categoryRepository.getById(category.getId());
    if (!categoryExists) {
      throw new CategoryNotFoundError(category.getId());
    }

    await this.categoryRepository.update(category);
  }
}
