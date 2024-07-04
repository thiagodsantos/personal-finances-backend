import { Category } from '@domain/modules/category/entity/category.entity';

import { createSubCategoryMock } from '@domain/modules/sub-category/entity/sub-category.entity.spec';

import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';
import { Text } from '@domain/value-objects/text.value-object';

export const createCategory = Category.create({
  description: Text.create('test_description'),
  id: Id.create('test_id'),
  name: Name.create('test_name'),
  subCategories: [createSubCategoryMock()],
});

describe('CategoryEntity', () => {
  it('should getters return values', () => {
    const category = createCategory;

    expect(category.getId().getValue()).toBe(createCategory.getId().getValue());
    expect(category.getName().getValue()).toBe(createCategory.getName().getValue());
    expect(category.getDescription()?.getValue()).toBe(createCategory.getDescription()?.getValue());
    expect(category.getSubCategories()?.[0].getId().getValue()).toBe(
      createCategory.getSubCategories()?.[0].getId().getValue()
    );
  });
});
