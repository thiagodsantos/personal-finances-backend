import { Category } from '@domain/modules/category/entity/category.entity';
import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { UpdateCategoryUseCase } from '@domain/modules/category/use-case/update-category.use-case';

export class UpdateCategoryUseCaseImpl extends UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async execute(category: Category): Promise<void> {
    await this.categoryRepository.update(category);
  }
}
