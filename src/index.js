import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {

  const options = { ...{
    script: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11',
    // Extend Typed block, eg. `{ label: 'Typed', ... }`
    // Pass a falsy value to skip the block
    block: {},
    // default options
  },  ...opts };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
};