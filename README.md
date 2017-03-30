# dh2o-atlantis
Style guide for front end DigitalH2O applications

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

### Setup
`yarn install`

If that command fails, install `yarn` with the command `npm install -g yarn`. 

Then run the install command again.

### Run
```
npm run dev
open http://localhost:8080
```

### Sass Variables
In our style guide we use sass-extract-loader to pull in a scss and parse variables from it. You can view usage here at [sass-extract-loader](https://github.com/jgranstrom/sass-extract-loader)
