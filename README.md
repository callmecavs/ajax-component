# pjax-component

[![pjax-component on NPM](https://img.shields.io/npm/v/pjax-component.svg?style=flat-square)](https://www.npmjs.com/package/pjax-component) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

A [Custom Element](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) that PJAXs its content.

![Demo GIF](https://github.com/callmecavs/pjax-component/blob/master/demo.gif)

## Install

```sh
$ npm i pjax-component --save
```

## Use

Decide on a `name` for your element (it must contain a `-`).

Using your `name`, add the new element(s) to your HTML:

```html
<!-- dont forget the closing tag -->
<pjax-component content="path/to/html" fetch="false"></pjax-component>
```

Then, in your JavaScript, pass your `name` to the import:

```javascript
// import the package
import createPJAXComponent from 'pjax-component'

// call the imported function
// pass your element name as used in the HTML
createPJAXComponent('pjax-component')
```

When you're ready for the element to PJAX its content, change the `fetch` attribute to `true`.

```javascript
document
  .getElementById('component')
  .setAttribute('fetch', true)
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
