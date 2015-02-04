# Riot tag file loader for Webpack

[Webpack](http://webpack.github.io/) can use this loader to automatically compile [Riot](https://muut.com/riotjs/) tag files. Inspired by [this GitHub Gist](https://gist.github.com/guyromm/77d044c1fc75b117c99b).


## Install

    npm install tag-loader --save-dev


#### webpack.config.js Configuration
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

    { test: /\.tag$/, loader: 'tag?compact' },
    { test: /\.tag$/, loader: 'tag', query: {compact: 'true'} },

See also the [Webpack loader documentation](http://webpack.github.io/docs/using-loaders.html).


## ES5 projects
Once you've installed and configured the `tag-loader` you can require Riot tag files into your project using the `require()` function e.g.

    require('./tags.tag');


## ES6 projects
Once you've installed and configured the `tag-loader` and [6to5-loader](https://www.npmjs.com/package/6to5-loader) you can import Riot tag files into your project using the ES6 module `import` statement e.g.

    import './tags.tag'

**NOTE**: I do not recommend using ES6 code inside Riot tag files, [here's why](https://muut.com/riotjs/forum/#!/using:problem-referencing-this-in).