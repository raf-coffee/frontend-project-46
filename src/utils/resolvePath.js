import path from 'path';

const resolvePath = (filepath) => {
  if (filepath.includes('__fixtures__')) {
    return path.resolve(process.cwd(), filepath);
  }
  return path.resolve(process.cwd(), (`__fixtures__/${filepath}`));
};

export default resolvePath;
