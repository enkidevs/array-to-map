array-to-map
=============

[![CircleCI](https://circleci.com/gh/enkidevs/array-to-map.svg?style=svg)](https://circleci.com/gh/enkidevs/array-to-map)
[![npm version](https://img.shields.io/npm/v/@enkidevs/array-to-map.svg?style=flat-square)](https://www.npmjs.com/package/@enkidevs/array-to-map)

Converting an array into a [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map).

```js
const map = arrayToMap([
  { id: 'a', value: 1 },
  { id: 'b', value: 2 },
  { id: 'c', value: 3 },
]);
console.log(map);
/*
{
  {0 => { id: 'a', value: 1 }}
  {1 => { id: 'b', value: 2 }}
  {2 => { id: 'c', value: 3 }}
}
*/
```

You can decide how the keys are created:

```js
const map = arrayToMap([
  { id: 'a', value: 1 },
  { id: 'b', value: 2 },
  { id: 'c', value: 3 },
], item => item.id);
console.log(map);
/*
{
  {'a' => { id: 'a', value: 1 }}
  {'b' => { id: 'b', value: 2 }}
  {'c' => { id: 'c', value: 3 }}
}
*/
```

## License

MIT
