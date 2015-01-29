# Riot tag file loader for Webpack


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

