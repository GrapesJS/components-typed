export default (editor, opts = {}) => {
  const domc = editor.DomComponents;

  domc.addType('MY-COMPONENT', {
    model: {
      defaults: {
        // Same options as https://github.com/mattboldt/typed.js#customization
        'type-speed': 40,
        'start-delay': 0,
        'back-delay': 700,
        'back-speed': 0,
        'smart-backspace': 1,
        'fade-out': 0,
        'fade-out-class': 'typed-fade-out',
        'fade-out-delay': 500,
        'show-cursor': 1,
        'cursor-char': '|',
        'auto-insert-css': 1,
        'bind-input-focus-events': 0,
        'content-type': 'html',
        loop: 0,
        loopCount: 0,
        shuffle: 0,
        attr: '',

        // GJS props
        tagName: 'span',
        typedsrc: opts.script,
        droppable: 0,
        strings: [],
        traits: [],
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
      },
    },
    view: {

    },
  });
};
