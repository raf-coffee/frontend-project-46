import compare from './compare.js';
import parse from './parse.js';

const showDiff = (file1, file2) => {
  const dataFromFile1 = parse(file1);
  const dataFromFile2 = parse(file2);
  return compare(dataFromFile1, dataFromFile2);
};

export default showDiff;
