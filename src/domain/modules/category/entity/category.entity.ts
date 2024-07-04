import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export interface CategoryProps {
  id: string;
  name: string;
  description?: string;
  subCategories?: SubCategory[];
}

export class Category {
  private readonly id: string;
  private readonly name: string;
  private readonly description?: string;
  private readonly subCategories?: SubCategory[];

  private constructor(category: CategoryProps) {
    Object.assign(this, category);
  }

  static create(category: CategoryProps): Category {
    return new Category({
      ...category,
      subCategories: SubCategory.mapMany(category.subCategories ?? [])
    })
  }

  getDescription(): string | undefined {
    return this.description;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getSubCategories(): SubCategory[] | undefined {
    return this.subCategories;
  }
}