# next-remove
> Remove a item from array based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-remove
```

## usage
```js
import '@jswork/next-remove';

const ary1 = [1,2,3,4,5];
const ary2 = [
  { key: 1, value: 'value1' },
  { key: 2, value: 'value2' },
  { key: 3, value: 'value3' },
  { key: 4, value: 'value4' }
];

// 1. remove pure item:
nx.remove(ary1, [1,2,3]);
// result:
[4,5]


// 2. remove by a filter:
nx.remove(ary2, (_,item)=>{
  return item.key>2;
});

// result:
[
  { key: 1, value: 'value1' },
  { key: 2, value: 'value2' },
]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-remove/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-remove
[version-url]: https://npmjs.org/package/@jswork/next-remove

[license-image]: https://img.shields.io/npm/l/@jswork/next-remove
[license-url]: https://github.com/afeiship/next-remove/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-remove
[size-url]: https://github.com/afeiship/next-remove/blob/master/dist/next-remove.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-remove
[download-url]: https://www.npmjs.com/package/@jswork/next-remove
