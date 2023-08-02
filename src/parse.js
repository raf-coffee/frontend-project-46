import path from 'path';
import jsYaml from 'js-yaml';
import { readFileSync } from 'node:fs';
import resolvePath from './utils/resolvePath.js';

const parse = (filename) => {
  const extension = path.extname(filename);
  const fileContent = readFileSync(resolvePath(filename), 'utf-8');

  if (extension === '.json') {
    return JSON.parse(fileContent);
  }
  return jsYaml.load(fileContent);
};

export default parse;
