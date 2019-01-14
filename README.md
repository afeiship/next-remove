# next-remove
> Remove a item from array based on next.

## install:
```bash
npm install -S afeiship/next-remove
```

## usage:
```js
import 'next-remove';
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
