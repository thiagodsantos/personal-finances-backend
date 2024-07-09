/* eslint-disable */
import { container } from '@common/container';

export function Inject<T>(target: any, property: string | symbol) {
  const getter = (): T => target[property] ?? undefined;

  const setter = (): void => {
    target[property] = container.resolve(target) as T;
  };

  Object.defineProperty(target, property, {
    get: getter,
    set: setter,
    configurable: true,
  });
}
