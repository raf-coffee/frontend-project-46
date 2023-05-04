import resultStylish from '../__fixtures__/resultStylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.json';
import showDiff from '../src/index.js';

describe('stylish formatter', () => {
  test('with json', () => {
    expect(showDiff('file1.json', 'file2.json', 'stylish')).toEqual(resultStylish);
  });

  test('with yaml', () => {
    expect(showDiff('file1.yaml', 'file2.yaml', 'stylish')).toEqual(resultStylish);
  });

  test('with yml', () => {
    expect(showDiff('file1.yml', 'file2.yml', 'stylish')).toEqual(resultStylish);
  });
});

describe('plain formatter', () => {
  test('with json', () => {
    expect(showDiff('file1.json', 'file2.json', 'plain')).toEqual(resultPlain);
  });

  test('with yaml', () => {
    expect(showDiff('file1.yaml', 'file2.yaml', 'plain')).toEqual(resultPlain);
  });

  test('with yml', () => {
    expect(showDiff('file1.yml', 'file2.yml', 'plain')).toEqual(resultPlain);
  });
});

describe('json formatter', () => {
  test('with json', () => {
    expect(showDiff('file1.json', 'file2.json', 'json')).toEqual(resultJSON);
  });

  test('with yaml', () => {
    expect(showDiff('file1.yaml', 'file2.yaml', 'json')).toEqual(resultJSON);
  });

  test('with yml', () => {
    expect(showDiff('file1.yml', 'file2.yml', 'json')).toEqual(resultJSON);
  });
});
