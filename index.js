module.exports = {
  presets: [
    /**
     * @see https://twitter.com/joseph_fraley/status/832688588445749249
     * { modules: false } allows Webpack 2 to conduct treeshaking,
     * but it means that babel will not understand ESModules without Webpack's help
     */
    [require('babel-preset-latest'), { modules: false }],

    /**
     * @see https://www.npmjs.com/package/babel-preset-react
     * Includes strip-flow-type preset
     */
    require('babel-preset-react')
  ],
  plugins: [
    /**
     * @see https://babeljs.io/docs/plugins/syntax-async-functions/#top
     * Both needed for async/await functions
     */
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-runtime'),

    /**
     * @see https://babeljs.io/docs/plugins/transform-decorators/
     * makes this possible:
     * @autobind <--------
     * class Button extends React.Component
     */
    require('babel-plugin-transform-decorators-legacy'),

    /**
     * @see https://babeljs.io/docs/plugins/transform-class-properties/
     * makes this possible:
     * class Button extends React.Component {
     *  static propTypes = {...}
     * }
     */
    require('babel-plugin-transform-class-properties'),

    /**
     * @see https://babeljs.io/docs/plugins/transform-object-rest-spread/
     * makes this possible:
     * const props = {a:1, b:2, c:3}
     * <Button {...props} /> // Button.props === {a:1, b:2, c:3}
     */
    require('babel-plugin-transform-object-rest-spread'),

    /**
     * @see https://webpack.js.org/guides/code-splitting-import/#dynamic-import
     * makes webpacks lazy-load syntax possible:
     * import('react').then(({ Component }) => {
     *  class Button extends Component {...}
     * })
     */
    require('babel-plugin-syntax-dynamic-import'),
  ]
}
