import { isDeepStrictEqual } from 'node:util';
import getSortedKeys from './utils/getSortedKeys.js';

const buildAST = (obj1, obj2) => {
  const keys = getSortedKeys(obj1, obj2);
  return keys.map((key) => {
    if (!Object.hasOwn(obj2, key)) {
      return { status: 'deleted', key, value: obj1[key] };
    }
    if (!Object.hasOwn(obj1, key)) {
      return { status: 'added', key, value: obj2[key] };
    }
    if (isDeepStrictEqual(obj1[key], obj2[key])) {
      return { status: 'unchanged', key, value: obj1[key] };
    }
    if (typeof obj1[key] !== 'object' || obj1[key] === null || typeof obj2[key] !== 'object' || obj2[key] === null) {
      return {
        status: 'changed', key, value1: obj1[key], value2: obj2[key],
      };
    }
    return { status: 'unchanged', key, value: buildAST(obj1[key], obj2[key]) };
  });
};

export default buildAST;
