import jax from 'jax.js'

class AJAXComponent extends window.HTMLElement {
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
      // get attributes that are resources to load
      const attrs = [
        'content',
        'style',
        'script'
      ].reduce((accum, current) => {
        accum[current] = this.getAttribute(current)
        return accum
      }, {})

      // build a function that returns an array of GET request Promises
      const requests = () => Object
        .keys(attrs)
        .map(key => {
          // get the path to resouce
          const path = attrs[key]

          // if no path exists, resolve instantly, because there's nothing to load
          if (!path) {
            return Promise.resolve()
          }

          // otherwise request the resource
          return jax(path)
        })

      // request all the resources, waiting for them all to finish
      Promise
        .all(requests())
        .then(contents => {
          // destructure out attrs keys from above
          const [
            content,
            style,
            script
          ] = contents

          // build a <template> element to inject
          const template = document.createElement('template')

          // add the CSS first, wrapped in a <style> tag
          template.innerHTML += `<style>${style}</style>`

          // add the HTML
          template.innerHTML += content

          // add the JS last, in a <script> tag, as well as wrapped by an IIFE
          // the IIFE ensures nothing leaks to the window
          template.innerHTML += `
            <script>
              (() => {
                ${script}
              })()
            </script>
          `

          // inject our DOM content into the cached Shadow DOM
          // this is what is required to make the JS execute
          this.shadow.appendChild(document.importNode(template.content, true))
        })
    }
  }
}

const component = name => {
  // name sure the name has a dash,
  // this is a Custom Elements requirement
  if (name.indexOf('-') === -1) {
    throw new Error('ajax-component: Custom Element name must contain a dash.')
  }

  // quick feature check
  // attach the element using the name provided, or error out
  if ('customElements' in window) {
    window.customElements.define(name, AJAXComponent)
  } else {
    throw new Error('ajax-component: Custom Elements are not supported in the current browser.')
  }
}

export default component
