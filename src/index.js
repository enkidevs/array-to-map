module.exports = function arrayToMap(array, keyMapper = defaultKeyMapper) {
  if (!Array.isArray(array)) {
    throw Error('must past in an array');
  }
  return array.reduce((map, item, pos) => {
    map.set(keyMapper(item, pos) || pos, item);
    return map;
  }, new Map());
};

function defaultKeyMapper(item, pos) {
  // map items by their position, by default
  return pos;
}
