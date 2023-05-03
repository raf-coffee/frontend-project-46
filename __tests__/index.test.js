import result from '../__fixtures__/result.js';
import showDiff from '../src/index.js';

test('compare json', () => {
  expect(showDiff('file1.json', 'file2.json', 'stylish')).toEqual(result);
});

test('compare yaml/yml', () => {
  expect(showDiff('file1.yaml', 'file2.yaml', 'stylish')).toEqual(result);
  expect(showDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(result);
});
