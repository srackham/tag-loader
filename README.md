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

## TODO
1. Process loader queries (Riot compiler `--type` and `--compact` options).
2. More usage examples.
