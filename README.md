# ajax-component

[![ajax-component on NPM](https://img.shields.io/npm/v/ajax-component.svg?style=flat-square)](https://www.npmjs.com/package/ajax-component) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

A [Custom Element](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) that AJAXs its content, style, and scripts.

<img src="https://github.com/callmecavs/ajax-component/blob/master/demo.gif" width="480">

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

### HTML

Using your `name`, add the new element to your markup:

```html
<!-- note that a closing tag is required -->
<ajax-component></ajax-component>
```

Then, add the these attributes to load your resources:

| Attribute | Extension | Required | Optional |
| :-------- | :-------: | :------: | :------: |
| `content` | .html     |          | ✓        |
| `style`   | .css      |          | ✓        |
| `script`  | .js       |          | ✓        |

```html
<!-- will load HTML only -->
<!-- while not technically required, scoped CSS and/or JS isn't useful without HTML -->
<ajax-component content="path/to/file.html"></ajax-component>

<!-- will load HTML content, scoped CSS, and scoped JS -->
<ajax-component
  content="path/to/file.html"
  style="path/to/file.css"
  script="path/to/file.js">
</ajax-component>
```

Finally, add the `fetch` attribute to your element.

It must have an initial value of `false` (or this wouldn't be an AJAX component).

```html
<ajax-component
  fetch="false"
  content="path/to/file.html"
  style="path/to/file.css"
  script="path/to/file.js">
</ajax-component>
```

### JavaScript

Using your `name`, in your JavaScript, pass it to the import:

```javascript
// import the default export
// this is a function that accepts an element name
import createAJAXComponent from 'ajax-component'

// call the imported function
// pass the element name as used in the HTML to create the Custom Element
createAJAXComponent('ajax-component')
```

An element will AJAX its resources when the `fetch` attribute changes to `true`.

```javascript
// selected the element we want to load
const customEl = document.querySelector('ajax-component')

// set the fetch attribute to true
customEl.setAttribute('fetch', 'true')
```

## Browser Support

`pjax-component` makes use of the [Custom Elements v1 API](https://developers.google.com/web/fundamentals/getting-started/primers/customelements). As such, it runs natively in the following (see [caniuse](http://caniuse.com/#feat=custom-elementsv1)):

* Chrome 54+
* Safari 10.1+
* Opera 42+

## Roadmap

- [ ] Explore polyfill options (potential impact on scoping)

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
