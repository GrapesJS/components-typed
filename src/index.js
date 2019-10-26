import loadComponents from './components';
import loadBlocks from './blocks';
import loadTraits from './traits';

export default (editor, opts = {}) => {

  const options = { ...{
    script: 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11',
    // Object to extend the default block, eg. `{ label: 'Typed', ... }`
    // Pass a falsy value to avoid adding the block
    block: {},

    // Customize the component props. The final object should be returned
    // from the function.
    /**
     eg. Here an example of how you would customize component's traits
     `props => {
        props.traits = props.traits.map(trait => {
          if (trait.name == 'strings') {
            trait.label = 'Custom <b>trait<b/> label';
          }
          // this trait will be removed
          if (trait.name == 'fade-out-class') return;
          return trait;
        }).filter(i => i);

        return props;
     }`
     */
    props: i => i,
  },  ...opts };

  loadComponents(editor, options);
  loadBlocks(editor, options);
  loadTraits(editor, options);
};