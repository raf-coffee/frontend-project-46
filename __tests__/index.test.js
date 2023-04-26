import result from '../__fixtures__/result.js';
import showDiff from '../src/index.js';

test('compare plain json', () => {
  expect(showDiff('file1.json', 'file2.json')).toEqual(result);
});
