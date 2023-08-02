import showDiff from '../src/index.js';
import resolvePath from '../src/utils/resolvePath';
import resultStylish from '../__fixtures__/resultStylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJSON.json';

const extensions = ['yml', 'yaml', 'json'];

const getFixturesPaths = (extension) => {
  const fileBefore = resolvePath(`__fixtures__/file1.${extension}`);
  const fileAfter = resolvePath(`__fixtures__/file2.${extension}`);
  return [fileBefore, fileAfter];
}

describe('Formatters', () => {
  describe('Without formatter', () => {
    test.each(extensions)("with %s", (extension) => {
      const [fileBefore, fileAfter] = getFixturesPaths(extension);
      const actual = showDiff(fileBefore, fileAfter);
      expect(actual).toEqual(resultStylish);
    })
  });

  describe('Stylish formatter', () => {
    test.each(extensions)("with %s", (extension) => {
      const [fileBefore, fileAfter] = getFixturesPaths(extension);
      const actual = showDiff(fileBefore, fileAfter, 'stylish');
      expect(actual).toEqual(resultStylish);
    })
  });

  describe('Plain formatter', () => {
    test.each(extensions)("with %s", (extension) => {
      const [fileBefore, fileAfter] = getFixturesPaths(extension);
      const actual = showDiff(fileBefore, fileAfter, 'plain');
      expect(actual).toEqual(resultPlain);
    })
  });

  describe('JSON formatter', () => {
    test.each(extensions)("with %s", (extension) => {
      const [fileBefore, fileAfter] = getFixturesPaths(extension);
      const actual = showDiff(fileBefore, fileAfter, 'json');
      expect(actual).toEqual(resultJSON);
    })
  });

  describe('Wrong formatter', () => {
    test.each(extensions)("should throw an error with %s", (extension) => {
      const [fileBefore, fileAfter] = getFixturesPaths(extension);
      expect(() => showDiff(fileBefore, fileAfter, 'js')).toThrow(Error);
    })
  });
})
