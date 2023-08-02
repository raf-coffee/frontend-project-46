import stringify from '../utils/stringify.js';

const indent = (treeDepth, status, replacer = ' ', spaces = 4) => (
  replacer.repeat(status !== 'unchanged' ? spaces * treeDepth - 2 : spaces * treeDepth));

const formatter = (tree) => {
  const iter = (node, depth) => {
    if (typeof node !== 'object' || node === null) {
      return `${node}`;
    }
    if (Array.isArray((node))) {
      const lines = Object.values(node).map((value) => {
        if (value.status === 'unchanged') {
          return `${indent(depth, 'unchanged')}${value.key}: ${iter(value.value, depth + 1)}`;
        }
        if (value.status === 'added') {
          return `${indent(depth, 'added')}+ ${value.key}: ${iter(value.value, depth + 1)}`;
        }
        if (value.status === 'deleted') {
          return `${indent(depth, 'deleted')}- ${value.key}: ${iter(value.value, depth + 1)}`;
        }
        return `${indent(depth, 'changed')}- ${value.key}: ${iter(value.value1, depth + 1)}`
                + `\n${indent(depth, 'changed')}+ ${value.key}: ${iter(value.value2, depth + 1)}`;
      });
      return stringify(lines, depth);
    }
    const lines = Object.entries(node)
      .map(([key, value]) => `${indent(depth + 0.5, 'changed')}${key}: ${iter(value, depth + 1)}`);
    return stringify(lines, depth);
  };
  return iter(tree, 1);
};

export default formatter;
