import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'

// 通过 mode 接口拿到 src/components 下的所有文件夹名作为打包后的模块
const fs = require('fs')
const path = require('path')
const componentDir = 'src/components'
const cModuleNames = fs.readdirSync(path.resolve(componentDir))
const cModuleMap = cModuleNames.reduce((prev, name) => {
  prev[name] = `${componentDir}/${name}/index.js`

  return prev
}, {})

export default {
  input: {
    index: 'src/index.js',
    ...cModuleMap
  },
  output: [
    {
      dir: 'lib',
      entryFileNames: '[name]/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      dir: 'es',
      entryFileNames: '[name]/index.js',
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    postcss(),
    url(),
    svgr(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve(),
    commonjs()
  ],
  experimentalCodeSplitting: true
}
