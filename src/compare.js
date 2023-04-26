import getSortedKeys from '../utils/getSortedKeys.js';

const compare = (obj1, obj2) => {
  const keys = getSortedKeys(obj1, obj2);
  const finalStr = ['{'];
  keys.forEach((key) => {
    if (!Object.hasOwn(obj2, key)) {
      finalStr.push(`  - ${key}: ${obj1[key]}`);
    } else if (!Object.hasOwn(obj1, key)) {
      finalStr.push(`  + ${key}: ${obj2[key]}`);
    } else if (obj1[key] !== obj2[key]) {
      finalStr.push(`  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`);
    } else {
      finalStr.push(`    ${key}: ${obj2[key]}`);
    }
  });
  finalStr.push('}');
  return finalStr.join('\n');
};

export default compare;
