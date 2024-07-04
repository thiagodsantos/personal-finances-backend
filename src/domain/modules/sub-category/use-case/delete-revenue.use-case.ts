import { Id } from '@domain/value-objects/id.value-object';

export abstract class DeleteSubCategoryUseCase {
  abstract execute(subCategory: Id): Promise<void>;
}
