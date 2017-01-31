const component = () => {
  // quick feature check
  if (!'customElements' in window) {
    // drop a warning in the console
    console.warn('pjax-component: Custom Elements not supported in current browser.')

    // exit early, can't create a Custom Element
    return
  }
}

export default component
