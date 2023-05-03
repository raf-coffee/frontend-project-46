import stylish from './stylish.js';

export default (format) => {
  switch (format) {
    case 'stylish': {
      return (data) => stylish(data);
    }
    default: {
      throw new Error('Format is unknown');
    }
  }
};
