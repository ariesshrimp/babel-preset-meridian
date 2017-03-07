/**
 * Need this for babel-preset-react,
 * which exports uncompiled ESModules I guess.
 */
const _require = (name) => {
  const req = require(name)
  return name['default'] ? name['default'] : name
}

module.exports = {
  presets: [
    /**
     * @see https://twitter.com/joseph_fraley/status/832688588445749249
     * { modules: false } allows Webpack 2 to conduct treeshaking,
     * but it means that babel will not understand ESModules without Webpack's help
     */
    [_require('babel-preset-latest'), { es2015: {modules: false} }],

    /**
     * @see https://www.npmjs.com/package/babel-preset-react
     * Includes strip-flow-type preset
     */
    _require('babel-preset-react')
  ],
  plugins: [
    /**
     * @see https://babeljs.io/docs/plugins/syntax-async-functions/#top
     * Both needed for async/await functions
     */
    _require('babel-plugin-transform-async-to-generator'),
    _require('babel-plugin-transform-runtime'),

    /**
     * @see https://babeljs.io/docs/plugins/transform-decorators/
     * makes this possible:
     * @autobind <--------
     * class Button extends React.Component
     */
    _require('babel-plugin-transform-decorators-legacy'),

    /**
     * @see https://babeljs.io/docs/plugins/transform-class-properties/
     * makes this possible:
     * class Button extends React.Component {
     *  static propTypes = {...}
     * }
     */
    _require('babel-plugin-transform-class-properties'),

    /**
     * @see https://babeljs.io/docs/plugins/transform-object-rest-spread/
     * makes this possible:
     * const props = {a:1, b:2, c:3}
     * <Button {...props} /> // Button.props === {a:1, b:2, c:3}
     */
    _require('babel-plugin-transform-object-rest-spread'),

    /**
     * @see https://webpack.js.org/guides/code-splitting-import/#dynamic-import
     * makes webpacks lazy-load syntax possible:
     * import('react').then(({ Component }) => {
     *  class Button extends Component {...}
     * })
     */
    _require('babel-plugin-syntax-dynamic-import')
  ]
}
