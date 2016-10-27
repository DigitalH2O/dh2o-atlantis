<template>
  <div id="content-grid" class="section">
    <div class="title"><h1>Grid System</h1></div>
    <div class="content">
      <p>
        We have decided to go with <a target="_blank" href="http://flexboxgrid.com">Flexboxgrid</a>
        as our grid system. Please take a look at their docs to understand how
        to use the grid system.
      </p>
      <p>
        Its simple enough that we decided to import the raw files into our sass
        build process in the event we want to make manual changes that would reflect
        how we build out our applications.
      </p>

      <code-sample>
        <h3>2 Column Example</h3>
        <div class="row">
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div>&nbsp;</div>
          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
            <div>&nbsp;</div>
          </div>
        </div>

        <h3>3 Column Example</h3>
        <div class="row">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div>&nbsp;</div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div>&nbsp;</div>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <div>&nbsp;</div>
          </div>
        </div>
      </code-sample>

      <div class="message notice">
        Notice that when resizing the site it will redistribute columns
      </div>

    </div>
  </div>
</template>

<style>
  @import '~dh2o-atlantis/scss/index';

  #content-grid {
    .row {
      margin-bottom: $standard-spacing;
    }
    .col-xs-12 > div {
      background-color: $primary;
      border-bottom: solid 1px $white;
    }

    .code-sample {
      .as-rendered, .as-code {
        display: block;
        width: 100%;
      }
    }
  }
</style>
