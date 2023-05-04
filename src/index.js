import parse from './parse.js';
import buildAST from './buildAST.js';
import dispatcher from './formatter/index.js';

const showDiff = (file1, file2, format) => {
  const dataFromFile1 = parse(file1);
  const dataFromFile2 = parse(file2);
  const syntaxTree = buildAST(dataFromFile1, dataFromFile2);
  const formatter = dispatcher(format);
  return formatter(syntaxTree);
};

export default showDiff;
