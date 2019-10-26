import { cmpId, traitStringId } from './utils';

export default (editor, opts = {}) => {
  const domc = editor.DomComponents;
  const { keys } = Object;

  // Same options of the library
  // https://github.com/mattboldt/typed.js#customization
  const typedProps = {
    strings: [],
    'type-speed': 0,
    'start-delay': 0,
    'back-speed': 0,
    'smart-backspace': true,
    'back-delay': 700,
    'fade-out': false,
    'fade-out-class': 'typed-fade-out',
    'fade-out-delay': 500,
    'show-cursor': true,
    'cursor-char': '|',
    'auto-insert-css': true,
    'bind-input-focus-events': false,
    'content-type': 'html',
    loop: false,
    'loop-count': Infinity,
    shuffle: false,
    attr: '',
  };

  const getTraitType = value => {
    if (typeof value == 'number') return 'number';
    if (typeof value == 'boolean') return 'checkbox';
    return 'text';
  };

  const traits = keys(typedProps)
    .filter(item => ['strings'].indexOf(item) < 0)
    .map(name => ({
      changeProp: 1,
      type: getTraitType(typedProps[name]),
      min: 0,
      name,
    }));

  traits.unshift({
    changeProp: 1,
    name: 'strings',
    type: traitStringId,
  });

  domc.addType(cmpId, {
    model: {
      defaults: opts.props({
        ...typedProps,
        typedsrc: opts.script,
        droppable: 0,
        traits,
        script() {
          const strings = JSON.parse('{[ strings ]}');
          const int = num => parseInt(num, 10) || 0;
          const bool = val => !!val;
          const init = () => {
            const el = this;
            el.innerHTML = '<span></span>';
            const loopCount = parseInt('{[ loop-count ]}', 10);
            const config = {
              typeSpeed: int('{[ type-speed ]}'),
              startDelay: int('{[ start-delay ]}'),
              backDelay: int('{[ back-delay ]}'),
              backSpeed: int('{[ back-speed ]}'),
              smartBackspace: bool('{[ smart-backspace ]}'),
              fadeOut: bool('{[ fade-out ]}'),
              fadeOutClass: '{[ fade-out-class ]}',
              fadeOutDelay: int('{[ fade-out-delay ]}'),
              shuffle: bool('{[ shuffle ]}'),
              loop: bool('{[ loop ]}'),
              loopCount: isNaN(loopCount) ? Infinity : loopCount,
              showCursor: bool('{[ show-cursor ]}'),
              cursorChar: '{[ cursor-char ]}',
              autoInsertCss: bool('{[ auto-insert-css ]}'),
              bindInputFocusEvents: bool('{[ bind-input-focus-events ]}'),
              attr: '{[ attr ]}',
              contentType: '{[ content-type ]}',
            };

            if (strings && strings.length) {
              config.strings = strings;
            }

            new Typed(el.children[0], config);
          };

          if (!window.Typed) {
            const scr = document.createElement('script');
            scr.src = '{[ typedsrc ]}';
            scr.onload = init;
            document.head.appendChild(scr);
          } else {
            init();
          }
        },
      }),

      init() {
        const events = traits.filter(i => ['strings'].indexOf(i.name) < 0)
          .map(i => `change:${i.name}`).join(' ');
        this.on(events, () => this.trigger('change:script'));
        this.on('change:strings', this.onStringsChange);
      },

      onStringsChange(model, value) {
        if (Array.isArray(value)) return;
        this.set({ strings: value.split('\n') });
        this.trigger('change:script');
      }
    },
  });
};
