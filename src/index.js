import parse from './parse.js';
import buildAST from './buildAST.js';
import getFormatted from './formatter/index.js';
import getFileExt from './utils/getFileExt.js';
import getData from './utils/getData.js';

const showDiff = (file1, file2, format = 'stylish') => {
  const extensionFile1 = getFileExt(file1);
  const extensionFile2 = getFileExt(file2);
  const dataFile1 = getData(file1);
  const dataFile2 = getData(file2);

  const parsedData1 = parse(dataFile1, extensionFile1);
  const parsedData2 = parse(dataFile2, extensionFile2);
  const syntaxTree = buildAST(parsedData1, parsedData2);
  const formatter = getFormatted(format);
  return formatter(syntaxTree);
};

export default showDiff;
