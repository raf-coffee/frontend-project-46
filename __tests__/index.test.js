import resultStylish from '../__fixtures__/resultStylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.json';
import showDiff from '../src/index.js';

test('compare stylish with json', () => {
  expect(showDiff('file1.json', 'file2.json', 'stylish')).toEqual(resultStylish);
});

test('compare stylish with yaml/yml', () => {
  expect(showDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(resultStylish);
});

test('compare plain with json', () => {
  expect(showDiff('file1.json', 'file2.json', 'plain')).toEqual(resultPlain);
});

test('compare plain with yaml/yml', () => {
  expect(showDiff('file1.yml', 'file2.yml', 'plain')).toEqual(resultPlain);
});

test('compare json with json', () => {
  expect(showDiff('file1.json', 'file2.json', 'json')).toEqual(resultJSON);
});

test('compare json with yaml/yml', () => {
  expect(showDiff('file1.yml', 'file2.yml', 'json')).toEqual(resultJSON);
});
