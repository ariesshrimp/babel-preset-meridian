# `babel-preset-meridian`
Shared babel configuration for Meridian projects.

![example .babelrc config file](https://www.evernote.com/l/Ae9r5ZO7ZSREnr84uAHaNgaQsCL_XD6ZDV8B/image.png)

## Use
```json
// .babelrc
{
  "presets": ["meridian"]
}
```

That's it!


The only relevant file is index.js. It contains comments explaining each of the needed presets and plugins. It exports a babel configuration containing all the following:

## Presets

###`['babel-preset-latest', { modules: false }]`
> See https://twitter.com/joseph_fraley/status/832688588445749249

`{ modules: false }` allows Webpack 2 to conduct treeshaking, but it means that babel will not understand ESModules without Webpack's help.
```javascript
// index.js
import { debounce } from 'lodash'
// webpack will only include debounce and throw the rest of lodash away during compilation.

// webpack.config.js
import Webpack from 'webpack' // <--- doesn't work, because webpack itself handles imports now
const Webpack = require('webpack') // <--- you just gotta do this in files not compiled by webpack that you expect babel to read, for example when using babel-node node_modules/.bin/webpack
```

### `'babel-preset-react'`
> See https://www.npmjs.com/package/babel-preset-react

Makes JSX possible and includes some other junk that Facebook likes (like flow-strip-types).
```javascript
import React from 'react'
const Button = () => <button />
```

## Plugins

### `'babel-plugin-transform-async-to-generator'  && 'babel-plugin-transform-runtime'`
> See https://babeljs.io/docs/plugins/syntax-async-functions/#top

Both needed for async/await functions

### `'babel-plugin-transform-decorators-legacy'`
> See https://babeljs.io/docs/plugins/transform-decorators/

Eventually Babel will incorporate this into `babel-preset-latest` and it won't be needed. Just waiting on the final decorators spec.

```javascript
import autobind from 'autobind'
import React from 'react'
@autobind // <--------
class Button extends React.Component {...}
```

### `'babel-plugin-transform-class-properties'`
> See https://babeljs.io/docs/plugins/transform-class-properties/

```javascript
class Button extends React.Component {
  static propTypes = {...} // <---
}
```

### `'babel-plugin-transform-object-rest-spread'`
> See https://babeljs.io/docs/plugins/transform-object-rest-spread/

```javascript
const props = {a:1, b:2, c:3}
<Button {...props} /> // Button.props === {a:1, b:2, c:3}
```

### `'babel-plugin-syntax-dynamic-import'`
> See https://webpack.js.org/guides/code-splitting-import/#dynamic-import

Makes webpacks lazy-load syntax possible. Used for code-splitting through react-router or something like that.

```javascript
import('react').then(({ Component }) => {
  class Button extends Component {...}
})

