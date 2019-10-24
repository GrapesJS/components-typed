import loadComponents from './components';
import loadBlocks from './blocks';

export default (editor, opts = {}) => {

  const options = { ...{
    script: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11',
    // default options
  },  ...opts };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);

  // TODO Remove
  editor.on('load', () =>
    editor.addComponents(
        `<div style="margin:100px; padding:25px;">
            Content loaded from the pluginss
        </div>`,
        { at: 0 }
    ))
};