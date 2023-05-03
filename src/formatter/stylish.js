const REPLACER = ' ';
const SPACES = 4;

const formatter = (tree) => {
  const iter = (node, depth) => {
    if (typeof node !== 'object' || node === null) {
      return `${node}`;
    }

    const currentIndent = (treeDepth, status = 'not unchanged') => REPLACER.repeat(status !== 'unchanged' ? SPACES * treeDepth - 2 : SPACES * treeDepth);
    const braceIndent = (treeDepth) => REPLACER.repeat(SPACES * treeDepth - SPACES);

    if (Array.isArray((node))) {
      const lines = Object.values(node).map((value) => {
        if (value.status === 'unchanged') {
          return `${currentIndent(depth, 'unchanged')}${value.key}: ${iter(value.value, depth + 1)}`;
        }
        if (value.status === 'added') {
          return `${currentIndent(depth)}+ ${value.key}: ${iter(value.value, depth + 1)}`;
        }
        if (value.status === 'deleted') {
          return `${currentIndent(depth)}- ${value.key}: ${iter(value.value, depth + 1)}`;
        }
        return `${currentIndent(depth)}- ${value.key}: ${iter(value.value1, depth + 1)}\n${currentIndent(depth)}+ ${value.key}: ${iter(value.value2, depth + 1)}`;
      });
      return ['{', ...lines, `${braceIndent(depth)}}`].join('\n');
    }
    const lines = Object.entries(node).map(([key, value]) => `${currentIndent(depth + 0.5)}${key}: ${iter(value, depth + 1)}`);
    return ['{', ...lines, `${braceIndent(depth)}}`].join('\n');
  };
  return iter(tree, 1);
};

export default formatter;
