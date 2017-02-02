import resolve from 'rollup-plugin-node-resolve'
// import babel from 'rollup-plugin-babel'

const info = require('./package.json')

const config = {
  entry: 'src/ajax-component.js',
  plugins: [
    resolve()

    // babel breaks Custom Element defining currently
    // https://github.com/babel/babel/issues/4480
    // babel()
  ],
  targets: [
    {
      dest: info.main,
      format: 'umd',
      moduleName: 'AjaxComponent'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
