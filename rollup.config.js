import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const info = require('./package.json')

const config = {
  entry: 'src/pjax-component.js',
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
      moduleName: 'PjaxComponent'
    }, {
      dest: info.module,
      format: 'es'
    }
  ]
}

export default config
