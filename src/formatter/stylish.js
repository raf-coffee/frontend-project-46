import stringify from '../../utils/stringify.js';

const currentIndent = (treeDepth, status, replacer = ' ', spaces = 4) => (
  replacer.repeat(status !== 'unchanged' ? spaces * treeDepth - 2 : spaces * treeDepth));

const formatter = (tree) => {
  const iter = (node, depth) => {
    if (typeof node !== 'object' || node === null) {
      return `${node}`;
    }
    if (Array.isArray((node))) {
      const lines = Object.values(node).map((value) => {
        if (value.status === 'unchanged') {
          return `${currentIndent(depth, 'unchanged')}${value.key}: ${iter(value.value, depth + 1)}`;
        }
        if (value.status === 'added') {
          return `${currentIndent(depth, 'added')}+ ${value.key}: ${iter(value.value, depth + 1)}`;
        }
        if (value.status === 'deleted') {
          return `${currentIndent(depth, 'deleted')}- ${value.key}: ${iter(value.value, depth + 1)}`;
        }
        return `${currentIndent(depth, 'changed')}- ${value.key}: ${iter(value.value1, depth + 1)}\n${currentIndent(depth, 'changed')}+ ${value.key}: ${iter(value.value2, depth + 1)}`;
      });
      return stringify(lines, depth);
    }
    const lines = Object.entries(node).map(([key, value]) => `${currentIndent(depth + 0.5, 'changed')}${key}: ${iter(value, depth + 1)}`);
    return stringify(lines, depth);
  };
  return iter(tree, 1);
};

export default formatter;
