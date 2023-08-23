import { getUniqId } from '.';

beforeAll(() => {
  jest.useFakeTimers();
});

describe('getUniqId', () => {
  it('should return a unique ID value based on the time', () => {
    jest.setSystemTime(new Date('2023-08-07T09:00:00Z'));

    const id1 = getUniqId();
    const id2 = getUniqId();

    expect(id1).not.toBe(id2);
  });
});
