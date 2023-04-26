import { readFileSync } from 'node:fs';
import path from 'path';

const compare = (obj1, obj2) => {
  const keys = Array.from(new Set(Object.keys(obj1).concat(Object.keys(obj2))))
    .sort((a, b) => a[0].localeCompare(b[0]));
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

const resolvePath = (filepath) => {
  if (filepath.includes('__fixtures__')) {
    return path.resolve(process.cwd(), filepath);
  }
  return path.resolve(process.cwd(), (`__fixtures__/${filepath}`));
};

const showDiff = (f1, f2) => {
  const dataFromFile1 = JSON.parse(readFileSync(resolvePath(f1), 'utf-8'));
  const dataFromFile2 = JSON.parse(readFileSync(resolvePath(f2), 'utf-8'));
  return compare(dataFromFile1, dataFromFile2);
};

export default showDiff;
