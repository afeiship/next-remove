var nx = require('next-js-core2');
require('../src/next-remove');

test('remove pure items', function() {
  var ary1 = [1, 2, 3, 4, 5, 6];
  var ary2 = ['a', 'b', 'c', 'd', 'e'];

  expect(nx.remove(ary1, [1]).join('')).toBe('23456');
  expect(nx.remove(ary2, ['c', 'e'])).toEqual(['a', 'b', 'd']);
});

test('remove pure items but not uniq', function() {
  var ary3_uniq = ['a', 'b', 'c', 'd', 'e', 'a', 'c', 'e'];
  expect(nx.remove(ary3_uniq, ['c', 'e'])).toEqual(['a', 'b', 'd', 'a', 'c', 'e']);
});

test('remove object items', function() {
  var ary1 = [
    {
      key: 1,
      value: 'value1'
    },
    {
      key: 2,
      value: 'value2'
    },
    {
      key: 3,
      value: 'value3'
    },
    {
      key: 4,
      value: 'value4'
    }
  ];

  var ary2 = [
    {
      key: 1,
      value: 'value1'
    },
    {
      key: 2,
      value: 'value2'
    },
    {
      key: 3,
      value: 'value3'
    },
    {
      key: 4,
      value: 'value4'
    }
  ];

  var result1 = nx.remove(ary1, [ary1[0], ary1[1]]);
  var result2 = nx.remove(ary2, [ary2[0]]);

  expect(result1.map((item) => item.key).join('')).toBe('34');
  expect(result2.map((item) => item.key).join('')).toBe('234');
});

test('remove pure items use callback', function() {
  var array = [1, 2, 3, 4];
  var evens = nx.remove(array, function(index, item) {
    return item % 2 == 0;
  });

  expect(evens).toEqual([1, 3]);
});
