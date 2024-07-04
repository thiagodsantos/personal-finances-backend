import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';
import { Text } from '@domain/value-objects/text.value-object';

export interface SubCategoryProps {
  description?: Text;
  id: Id;
  name: Name;
}

export class SubCategory {
  private readonly description?: Text;
  private readonly id: Id;
  private readonly name: Name;

  private constructor(subCategory: SubCategoryProps) {
    Object.assign(this, subCategory);
  }

  static create(subCategory: SubCategoryProps): SubCategory {
    return new SubCategory(subCategory);
  }

  static mapMany(subCategories: SubCategory[]): SubCategory[] {
    return subCategories.map((subCategory) =>
      SubCategory.create({
        description: subCategory.getDescription(),
        id: subCategory.getId(),
        name: subCategory.getName(),
      })
    );
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
}
