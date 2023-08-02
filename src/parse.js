import jsYaml from 'js-yaml';

export default (data, extension) => (extension === '.json' ? JSON.parse(data) : jsYaml.load(data));
