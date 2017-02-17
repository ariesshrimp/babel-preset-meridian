const babel = require('babel-core')

const code = `
  // imports
  import React from 'react'

  // object-spread
  const object1 = {a:1, b:2}
  const object2 = {...object1, c: 3}

  // jsx
  const button = () => <button />

  // decorators & class-props
  function log (value) { console.log(value) }
  @log
  class Thing extends React.Component {
    static propTypes = {}
  }

  // webpack lazy-load
  import('react').then(console.log)
`
const x = babel.transform(code, {presets: ['meridian']})
console.log(x.code)
