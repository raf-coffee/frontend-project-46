const braceIndent = (treeDepth, replacer = ' ', spaces = 4) => replacer.repeat(spaces * treeDepth - spaces);

export default (lines, depth) => ['{', ...lines, `${braceIndent(depth)}}`].join('\n');
