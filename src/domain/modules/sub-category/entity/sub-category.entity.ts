export interface SubCategoryProps {
  description?: string;
  id: string;
  name: string;
}

export class SubCategory {
  private readonly description?: string;
  private readonly id: string;
  private readonly name: string;

  private constructor(subCategory: SubCategoryProps) {
    Object.assign(this, subCategory);
  }

  static create(subCategory: SubCategoryProps): SubCategory {
    return new SubCategory(subCategory);
  }

  static mapMany(subCategories: SubCategory[]): SubCategory[] {
    return subCategories.map((subCategory) => SubCategory.create({
      description: subCategory.getDescription(),
      id: subCategory.getId(),
      name: subCategory.getName(),
    }));
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
}