export default (obj1, obj2) => Array.from(new Set(Object.keys(obj1).concat(Object.keys(obj2))))
  .sort((a, b) => a[0].localeCompare(b[0]));
