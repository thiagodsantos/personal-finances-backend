/* eslint-disable */
import 'reflect-metadata';

type Constructor<T> = new (...args: any[]) => T;
type AbstractConstructor<T> = abstract new (...args: any[]) => T;

class Container {
  private registrations = new Map<string, Constructor<any>>();

  register<T>(abstract: AbstractConstructor<T> | string, implementation: Constructor<T>) {
    const identifier = this.getIdentifier(abstract);
    if (!identifier) {
      throw new Error(`Identifier invalid to: ${implementation.name}`);
    }

    if (this.registrations.has(identifier)) {
      throw new Error(`Already has a registration for: ${identifier}`);
    }

    this.registrations.set(identifier, implementation);
  }

  resolve<T>(abstract: AbstractConstructor<T> | string, instance?: T): T {
    if (instance) {
      return instance;
    }

    const identifier = this.getIdentifier(abstract);

    const implementation = this.registrations.get(identifier);
    if (!implementation) {
      throw new Error(`No registration for: ${identifier}`);
    }

    const dependencies: [] = Reflect.getMetadata('design:paramtypes', implementation) ?? [];
    if (dependencies.length === 0) {
      return new implementation();
    }

    const injections = dependencies.map((dependency: Constructor<any>) =>
      this.resolve(dependency.name)
    );

    return new implementation(...injections);
  }

  add(container: Container): void {
    container.registrations.forEach((value, key) => {
      this.registrations.set(key, value);
    });
  }

  private getIdentifier<T>(abstract: AbstractConstructor<T> | string): string {
    return typeof abstract === 'string' ? abstract : abstract.name;
  }
}

export const container = new Container();
