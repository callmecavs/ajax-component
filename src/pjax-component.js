class PJAXComponent extends HTMLElement {
  constructor () {
    super()

    // create a shadow root
    this.shadow = this.attachShadow({ mode: 'open' })

    // cache request urls
    this.requests = [
      'data-html',
      'data-css',
      'data-js'
    ].reduce((accum, attr) => {
      accum[attr] = this.getAttribute(attr)
      return accum
    }, {})
  }

  static get observedAttributes () {
    return [
      'fetch'
    ]
  }

  attributeChangedCallback (name, prev, val) {
    // check for fetch
    if (name === 'fetch') {

    }
  }
}

const component = name => {
  // quick feature check
  if (!'customElements' in window) {
    throw new Error('pjax-component: Custom Elements are not supported in the current browser.')
  }

  // name sure the name has a dash,
  // this is a Custom Elements requirement
  if (name.indexOf('-') === -1) {
    throw new Error('pjax-component: Custom Element name must contain a dash.')
  }

  // attach the element using the name provided
  window.customElements.define(name, PJAXComponent)
}

export default component
