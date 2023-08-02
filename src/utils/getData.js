import { readFileSync } from 'node:fs';
import resolvePath from './resolvePath.js';

export default (filename) => readFileSync(resolvePath(filename), 'utf-8');
