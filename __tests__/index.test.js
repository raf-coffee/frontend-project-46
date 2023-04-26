import result from '../__fixtures__/result.js';
import showDiff from '../src/index.js';

test('compare plain json', () => {
  expect(showDiff('file1.json', 'file2.json')).toEqual(result);
});

test('compare plain yaml/yml', () => {
  expect(showDiff('file1.yaml', 'file2.yaml')).toEqual(result);
  expect(showDiff('file1.yml', 'file2.yml')).toEqual(result);
});
