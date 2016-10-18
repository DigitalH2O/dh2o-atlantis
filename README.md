# dh2o-atlantis
Style guide for front end applications

## Setup
npm install

## Run
```
npm start
open http://localhost:8080

// To listen on another port
npm start --port=5555
```

## Live Reload
Optional - To use live reload download the chrome extension and once your run the npm script click the icon to activate live reload. https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en

## Adding new files
Simply add a link rel="import" tag in the examples/index.html head. Place it in the order in which you want it to show up.

``<link rel="import" href="layout.html">``

In your html file wrap everything in a ``<template>`` tag.

```html
<template>
  Content Goes here
<template>
```

## Adding link to your content
In examples/index.html inside sidebar element add an a tag with the href="content-thing". Make sure to prepend with content to alleviate any conflict with any other ids

```html
<a href="#content-thing">Thing</a>
```
