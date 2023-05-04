import resultStylish from '../__fixtures__/resultStylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import showDiff from '../src/index.js';

test('compare stylish json', () => {
  expect(showDiff('file1.json', 'file2.json', 'stylish')).toEqual(resultStylish);
});

test('compare stylish yaml/yml', () => {
  expect(showDiff('file1.yaml', 'file2.yaml', 'stylish')).toEqual(resultStylish);
  expect(showDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(resultStylish);
});

test('compare plain json', () => {
  expect(showDiff('file1.json', 'file2.json', 'plain')).toEqual(resultPlain);
});

test('compare plain yaml/yml', () => {
  expect(showDiff('file1.yaml', 'file2.yaml', 'plain')).toEqual(resultPlain);
  expect(showDiff('file1.yml', 'file2.yml', 'plain')).toEqual(resultPlain);
});
