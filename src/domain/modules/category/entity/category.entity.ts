import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';
import { Text } from '@domain/value-objects/text.value-object';

import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export interface CategoryProps {
  description?: Text;
  id: Id;
  name: Name;
  subCategories?: SubCategory[];
}

export class Category {
  private readonly description?: Text;
  private readonly id: Id;
  private readonly name: Name;
  private readonly subCategories?: SubCategory[];

  private constructor(category: CategoryProps) {
    Object.assign(this, category);
  }

  static create(category: CategoryProps): Category {
    return new Category({
      ...category,
      subCategories: SubCategory.mapMany(category.subCategories ?? []),
    });
  }

  getDescription(): Text | undefined {
    return this.description;
  }

  getId(): Id {
    return this.id;
  }

  getName(): Name {
    return this.name;
  }

  getSubCategories(): SubCategory[] | undefined {
    return this.subCategories;
  }
}
