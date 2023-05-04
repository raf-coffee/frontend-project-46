import stylish from './stylish.js';
import plain from './plain.js';

export default (format) => {
  switch (format) {
    case 'stylish': {
      return (data) => stylish(data);
    }
    case 'plain': {
      return (data) => plain(data);
    }
    default: {
      throw new Error('Format is unknown');
    }
  }
};
