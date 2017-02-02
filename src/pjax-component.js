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

    console.log('constructor')
    console.log(this.shadow)
    console.log(this.requests)
  }
}

const component = name => {
  // quick feature check
  if (!'customElements' in window) {
    // drop a warning in the console
    console.warn('pjax-component: Custom Elements not supported in current browser.')

    // exit early, can't create a Custom Element
    return
  }

  // TODO: implement valid name check?
  // attach the element using the name provided
  window.customElements.define(name, PJAXComponent)
}

export default component
