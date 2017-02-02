import jax from 'jax.js'

class PJAXComponent extends window.HTMLElement {
  constructor () {
    super()

    // create a shadow root
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  // declare the attributes we need to watch
  static get observedAttributes () {
    return [
      'fetch'
    ]
  }

  // handler for when ANY attribute is changed
  // NOTE: might be able to simplify this check since we currently only watch 1 attribute
  attributeChangedCallback (name, prev, val) {
    // this fires when the element loads the first time,
    // so we check for both the fetch attribute and the true value
    if (name === 'fetch' && val === 'true') {
      // get the content attribute
      const content = this.getAttribute('content')

      // make GET request
      jax(content)
        .then(res => {
          // dump the HTML into the shadow root
          this.shadow.innerHTML = res
        })
        .catch(error => console.log(error))
    }
  }
}

const component = name => {
  // name sure the name has a dash,
  // this is a Custom Elements requirement
  if (name.indexOf('-') === -1) {
    throw new Error('pjax-component: Custom Element name must contain a dash.')
  }

  // quick feature check
  // attach the element using the name provided, or error out
  if ('customElements' in window) {
    window.customElements.define(name, PJAXComponent)
  } else {
    throw new Error('pjax-component: Custom Elements are not supported in the current browser.')
  }
}

export default component
