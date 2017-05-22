<script>
  import screenSizes from 'src/helpers/screen_sizes'
  export default {
    data: function () {
      return {
        screenSizes
      }
    }
  }
</script>

<template>
  <article id="content-grid">
    <header><h1>Grid System</h1></header>
    <div class="stage">
      <div class="widget body">
          <p>
            We have decided to go with the simple usage of using css flexbox.
          </p>
          <p>
            <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank">Here</a> is a really good reference on using flexbox.
          </p>
      </div>

      <div class="widget">
        <header><h2>Screen Sizes</h2></header>
        <div class="body">
          <p>To establish a set of media break points we have added a couple of variables that can be reused.</p>
          <div><b>Small</b> - $media-small - {{screenSizes.small}}</div>
          <div><b>Medium</b> - $media-medium - {{screenSizes.medium}}</div>
          <div><b>Large</b> - $media-large - {{screenSizes.large}}</div>
        </div>
      </div>
    </div>
  </article>
</template>
