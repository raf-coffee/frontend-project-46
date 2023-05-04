const toString = (value) => {
  switch (typeof value) {
    case 'object': {
      return value === null ? null : '[complex value]';
    }
    case 'string': {
      return `'${value}'`;
    }
    default: {
      return `${value}`;
    }
  }
};

const iter = (node, path) => node.map((child) => {
  const newPath = [path, child.key].flat().join('.');
  if (child.status === 'added') {
    return `Property '${newPath}' was added with value: ${toString(child.value)}`;
  }
  if (child.status === 'deleted') {
    return `Property '${newPath}' was removed`;
  }
  if (child.status === 'changed') {
    return `Property '${newPath}' was updated. From ${toString(child.value1)} to ${toString(child.value2)}`;
  }
  if (child.status === 'unchanged') {
    if (Array.isArray(child.value)) {
      return iter(child.value, newPath);
    }
  }
  return '';
}).filter((el) => el).join('\n');

const plain = (tree) => iter(tree, []);

export default plain;
