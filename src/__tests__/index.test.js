const arrayToMap = require('..');

describe('arrayToMap should convert array to map', () => {
  test('should throw for non array inputs', () => {
    for (const item of [1, true, '', null, {}, () => {}]) {
      expect(() => arrayToMap(item)).toThrow('must past in an array');
    }
  });

  test('should map an array to Map<key,value>', () => {
    const array = [1, 2, 3];
    expect(arrayToMap(array)).toEqual(
      new Map([
        [0, 1],
        [1, 2],
        [2, 3],
      ])
    );
  });

  test('should map apply a custom key mapper for array of primitives', () => {
    const array = [1, 2, 3];
    expect(arrayToMap(array, (_, pos) => `pos-${pos}`)).toEqual(
      new Map([
        ['pos-0', 1],
        ['pos-1', 2],
        ['pos-2', 3],
      ])
    );
  });

  test('should map apply a custom key mapper for array of objects', () => {
    const array = [
      { id: 'a', value: 1 },
      { id: 'b', value: 2 },
      { id: 'c', value: 3 },
    ];
    expect(arrayToMap(array, x => x.id)).toEqual(
      new Map([
        [array[0].id, array[0]],
        [array[1].id, array[1]],
        [array[2].id, array[2]],
      ])
    );
  });
});
