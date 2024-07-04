import { Id } from '@domain/value-objects/id.value-object';
import { Name } from '@domain/value-objects/name.value-object';
import { Text } from '@domain/value-objects/text.value-object';
import { SubCategory } from '@domain/modules/sub-category/entity/sub-category.entity';

export const createSubCategoryMock = (overrides?: SubCategory): SubCategory =>
  SubCategory.create({
    id: Id.create('test_id'),
    name: Name.create('test_name'),
    description: Text.create('test_description'),
    ...overrides,
  });

describe('SubCategoryEntity', () => {
  it('should getters return values', () => {
    const subCategory = createSubCategoryMock();

    expect(subCategory.getId().getValue()).toBe(createSubCategoryMock().getId().getValue());
    expect(subCategory.getName().getValue()).toBe(createSubCategoryMock().getName().getValue());
    expect(subCategory.getDescription()?.getValue()).toBe(
      createSubCategoryMock().getDescription()?.getValue()
    );
  });
});
