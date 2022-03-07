import SomeClass from '@app/core';

describe('SomeClass', () => {
  test('should instantiate SomeClass', () => {
    const instance = new SomeClass('Hello, world');

    expect(instance.someParameter).toBe('Hello, world');
  });
});
