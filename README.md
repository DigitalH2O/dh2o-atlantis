# dh2o-atlantis
Style guide for front end applications

## Using dh2o-atlantis in other projects

Install dh2o-atlantis with npm, and then do `@import '~dh2o-atlantis/scss/index';`
in your project's main SASS file to add the base DH2O styles.

### Building components with DH2O styles

If you need to use DH2O variables or mixins from an isolated styling context
-- like, say, the `<style>` block of a Vue component -- you should do:

```
@import '~dh2o-atlantis/scss/_partials';
```

If you need to do that a lot, it might make sense to create an alias in your
webpack config.

Do NOT import the `index.scss` file from your components! Doing so will duplicate
every CSS rule in dh2o-atlantis. You should only need to import `index` once per
project.

## Contributing to dh2o-atlantis

### Setup
npm install

### Run
```
npm start
open http://localhost:8080

// To listen on another port
npm start --port=5555
```

### Sass Variables
In our style guide we use get-sass-vars-loader to pull in a scss and parse variables from it. You can view usage here at [get-sass-vars-loader](https://github.com/brianvoe/get-sass-vars-loader)
