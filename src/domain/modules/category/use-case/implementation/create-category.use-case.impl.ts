import { Category } from '@domain/modules/category/entity/category.entity';
import { CategoryRepository } from '@domain/modules/category/repository/category.repository';
import { CreateCategoryUseCase } from '@domain/modules/category/use-case/create-category.use-case';

export class CreateCategoryUseCaseImpl implements CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  public async execute(category: Category): Promise<void> {
    await this.categoryRepository.create(category);
  }
}
