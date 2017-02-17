module.exports = {
  presets: [
    [require('babel-preset-latest'), { modules: false }],
    require('babel-preset-react')
  ],
  plugins: [
    require('babel-plugin-transform-async-to-generator'),
    require('babel-plugin-transform-decorators-legacy'),
    require('babel-plugin-transform-object-rest-spread'),
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-runtime'),
  ]
}
