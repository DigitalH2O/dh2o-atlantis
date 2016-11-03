# dh2o-atlantis
Style guide for front end applications

## Using dh2o-atlantis in other projects

Install dh2o-atlantis with npm, and then do `@import '~dh2o-atlantis/scss/index';`
in your project's main SASS file to add the base DH2O styles.

You'll also need to append the following to your SASS configuration in webpack:

```
jsontosass?path=${SASS_JSON_VARS_PATH}
```

where `SASS_JSON_VARS_PATH` is a variable containing the path to `src/scss/shared.json`.
It'll probably look something like `node_modules/dh2o-atlantis/src/scss/shared.json`.

For information about *why* we have to do this, see "Style variables and JSON"
below.

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

### Style variables and JSON (or, if you can't figure out where we defined
something, this is probably a decent place to start)

Some of our common style variables are actually defined in JSON (the
`src/scss/shared.json` file, specifically) to make them easier to access from
Javascript. For a good example of *why* we want to do this, take a look at the
`colors.vue` component, which iterates over various color sets in the template.

To get these variables into SCSS, we use [jsontosass-loader](https://github.com/EdwardIrby/jsontosass-loader) (yes, we know it's not maintained anymore). It turns:

* every root key in the JSON file into a global SCSS variable (e.g., `"colors": ...`
becomes `$colors: ...`)
* every *nested* dictionary in the SASS file into a SCSS map

`colors.scss` demonstrates the usage of a few of these variables from styles.

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

### Live Reload
Optional - To use live reload download the chrome extension and once your run the npm script click the icon to activate live reload. https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

### Adding new files
Simply add a link rel="import" tag in the examples/index.html head. Place it in the order in which you want it to show up.

``<link rel="import" href="layout.html">``

In your html file wrap everything in a ``<template>`` tag.

```html
<template>
  Content Goes here
<template>
```

### Adding link to your content
In examples/index.html inside sidebar element add an a tag with the href="content-thing". Make sure to prepend with content to alleviate any conflict with any other ids

```html
<a href="#content-thing">Thing</a>
```
