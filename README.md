# Riot tag file loader for Webpack

[Webpack](http://webpack.github.io/) can use this loader to automatically compile [Riot](https://muut.com/riotjs/) tag files. Inspired by [this GitHub Gist](https://gist.github.com/guyromm/77d044c1fc75b117c99b).


## Install

    npm install tag-loader --save-dev


## Usage examples

#### webpack.config.js
```
  :
module: {
loaders: [
  { test: /\.tag$/, loader: 'tag' },
    :
]
}
  :
```

Use query parameters to include Riot compiler command options. Examples:

    { test: /\.tag$/, loader: 'tag?type=es6&compact' },
    { test: /\.tag$/, loader: 'tag', query: {type: 'es6'} },

See also the [Webpack loader documentation](http://webpack.github.io/docs/using-loaders.html).
