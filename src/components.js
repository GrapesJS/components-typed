export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('MY-COMPONENT', {
    model: {
      defaults: {
        tagName: 'span',
        // Same options as https://github.com/mattboldt/typed.js#customization
        'type-speed': 40,
        'start-delay': 0,
        backspace: 1,
        typedsrc: opts.script,
        components: {
          highlightable: 0,
          tagName: 'span',
          layerable: 0,
          hoverable: 0,
          selectable: 0,
          removable: 0,
          draggable: 0,
          droppable: 0,
          removable: 0,
          copyable: 0,
        },
        traits: [],
        script() {
          const init = () => {
            const options = {
              strings: [
                '<i>First</i> sentence.',
                '&amp; a second sentence.',
                'This is a JavaScript library',
                'This is an ES6 module',
              ],
              smartBackspace: true,
              typeSpeed: 40,
            };
            const el = this.children[0];
            el.innerHTML = '';
            new Typed(el, options);
          };

          if (!window.Typed) {
            const scr = document.createElement('script');
            scr.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.11';
            scr.onload = init;
            document.head.appendChild(scr);
          } else {
            init();
          }
        },
      },
    },
    view: {

    },
  });
};
