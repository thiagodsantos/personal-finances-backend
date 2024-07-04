import { Category } from '@domain/modules/category/entity/category.entity';

import { createSubCategoryMock } from '@domain/modules/sub-category/entity/sub-category.entity.spec';

import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';
import { Text } from '@domain/value-objects/text.value-object';

export const createCategoryMock = (overrides: Partial<Category> = {}): Category =>
  Category.create({
    description: Text.create('test_description'),
    id: Id.create('test_id'),
    name: Name.create('test_name'),
    subCategories: [createSubCategoryMock()],
    ...overrides,
  });

describe('CategoryEntity', () => {
  const categoryMock: Category = createCategoryMock();

  it.each`
    id                                 | name                                 | description                                  | subCategories
    ${categoryMock.getId().getValue()} | ${categoryMock.getName().getValue()} | ${categoryMock.getDescription()?.getValue()} | ${undefined}
    ${categoryMock.getId().getValue()} | ${categoryMock.getName().getValue()} | ${categoryMock.getDescription()?.getValue()} | ${[createSubCategoryMock()]}
  `('should create a valid category', ({ id, name, description, subCategories }) => {
    const category = Category.create({
      description: Text.create(description),
      id: Id.create(id),
      name: Name.create(name),
      subCategories,
    });

    expect(category.getId().getValue()).toBe(id);
    expect(category.getName().getValue()).toBe(name);
    expect(category.getDescription()?.getValue()).toBe(description);
    expect(category.getSubCategories()).toEqual(subCategories ?? []);
  });
});
