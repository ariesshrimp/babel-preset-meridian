module.exports = {
  presets: [
    // { modules: false } allows Webpack 2 to conduct treeshaking,
    // but it means that babel will not understand ESModules without Webpack's help
    [require('babel-preset-latest'), { modules: false }],

    // Includes strip-flow-type preset
    require('babel-preset-react')
  ],
  plugins: [
    // Both needed for async/await functions
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-runtime'),

    /**
     * makes this possible:
     * @autobind <--------
     * class Button extends React.Component
     */
    require('babel-plugin-transform-decorators-legacy'),

    /**
     * makes this possible:
     * class Button extends React.Component {
     *  static propTypes = {...}
     * }
     */
    require('babel-plugin-transform-class-properties'),

    /**
     * makes this possible:
     * const props = {a:1, b:2, c:3}
     * <Button {...props} /> // Button.props === {a:1, b:2, c:3}
     */
    require('babel-plugin-transform-object-rest-spread'),
  ]
}
