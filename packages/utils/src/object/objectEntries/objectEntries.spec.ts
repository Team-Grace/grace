import { objectEntries } from '.';

describe('objectEntries', () => {
  it('should behave identical to Object.entries()', () => {
    const obj = {
      a: 1,
      b: 2,
      c: 3,
    } as const;

    const entries = objectEntries(obj); // ["a" | "b" | "c", 1 | 2 | 3][]

    expect(entries).toStrictEqual(Object.entries(obj));
    expect(entries).toStrictEqual([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
  });
});
