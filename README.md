# ajax-component

[![ajax-component on NPM](https://img.shields.io/npm/v/ajax-component.svg?style=flat-square)](https://www.npmjs.com/package/ajax-component) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

A [Custom Element](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) that AJAXs its content, style, and scripts.

<img src="https://github.com/callmecavs/ajax-component/blob/master/demo.gif" width="320">

## Features

* **HTTP2 first**. A component performs AJAX requests to fetch its HTML, CSS, and JS.
* **Scoped CSS**. Via the Shadow DOM, `ajax-component` has native CSS scoping (no build step required).
* **Scoped JavaScript**. Execute anything, with access to the global scope, but without polluting it.
* **Familiar**. Same old HTML, CSS, and JS. Just new elements.

## Install

```sh
$ npm i ajax-component --save
```

## Use

Decide on a `name` for your element (it must contain a `-`).

Using your `name`, add the new element(s) to your HTML:

```html
<!-- dont forget the closing tag -->
<ajax-component content="path/to/html" fetch="false"></ajax-component>
```

Then, in your JavaScript, pass your `name` to the import:

```javascript
// import the package
import createAJAXComponent from 'ajax-component'

// call the imported function
// pass your element name as used in the HTML
createAJAXComponent('ajax-component')
```

When you're ready for the element to AJAX its content, change the `fetch` attribute to `true`.

```javascript
document
  .getElementById('component')
  .setAttribute('fetch', true)
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
