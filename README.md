# GrapesJS Typed

Simple GrapesJS component made by wrapping Typed.js library

[DEMO](https://jsfiddle.net/artur_arseniev/xfvo50hj)


## Summary

* Plugin name: `grapesjs-typed`
* Components
    * `typed` - Main component

  | Prop | Description | Default |
  |-|-|-
  | `strings` | Description option | `[]` |
  | `type-speed` | Type speed in milliseconds | `0` |
  | `start-delay` | Time before typing starts in milliseconds | `0` |
  | `back-speed` | Backspacing speed in milliseconds | `0` |
  | `smart-backspace` | Only backspace what doesn't match the previous string | `true` |
  | `back-delay` | Time before backspacing in milliseconds | `700` |
  | `fade-out` | Fade out instead of backspace | `false` |
  | `fade-out-class` | CSS class for fade animation | `typed-fade-out` |
  | `fade-out-delay` | Fade out delay in milliseconds | `500` |
  | `show-cursor` | Show cursor | `true` |
  | `cursor-char` | Character for cursor | `\|` |
  | `auto-insert-css` | Insert CSS for cursor and fadeOut into HTML `<head>` | `true` |
  | `bind-input-focus-events` | Bind to focus and blur if el is text input | `false` |
  | `content-type` | 'html' or 'null' for plaintext | `html` |
  | `loop` | Loop strings | `false` |
  | `loop-count` | Amount of loops | `Infinity` |
  | `shuffle` | Shuffle the strings | `false` |
* Blocks
    * `typed` - Main block
* Traits
    * `typed-strings` - Textarea input to handle strings (one string per row)



## Options

| Option | Description | Default |
|-|-|-
| `option1` | Description option | `default value` |



## Download

* CDN
  * `https://unpkg.com/grapesjs-typed`
* NPM
  * `npm i grapesjs-typed`
* GIT
  * `git clone https://github.com/artf/grapesjs-typed.git`



## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-typed.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container: '#gjs',
      // ...
      plugins: ['grapesjs-typed'],
      pluginsOpts: {
        'grapesjs-typed': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-typed';
import 'grapesjs/dist/css/grapes.min.css';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```



## Development

Clone the repository

```sh
$ git clone https://github.com/artf/grapesjs-typed.git
$ cd grapesjs-typed
```

Install dependencies

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build the source

```sh
$ npm run build
```



## License

MIT
