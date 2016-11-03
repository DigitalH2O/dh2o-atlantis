<template>
  <div id="content-fonts" class="section">
    <div class="title"><h1>Fonts</h1></div>
    <div class="content">
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <h6>H6</h6>

      <div class="message notice">
        Notice that this application uses h tags for each section title
        and for each sub section title.
      </div>

      <p class="normal-weight">
        This text has the normal font weight.
      </p>

      <p class="bold-weight">
        This text uses <code class="language-markup">$font-weight-bold</code>.
        Section headers, input labels, and buttons should usually use bold text.
      </p>

      <div class="separator"></div>

      <h3>P tags</h3>
      <p>This tag has a default line height and a small bottom margin</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed purus magna, placerat ac tincidunt nec, ultricies rhoncus
        elit. Sed ultrices finibus urna vel finibus. Pellentesque sit amet
        tincidunt tortor. Vivamus sit amet metus dolor.
      </p>
      <p>
        Nunc sit amet lacus quis erat hendrerit mattis. Cras velit leo,
        finibus eu tortor non, mattis fringilla lorem. Nam non mattis ante.
        Proin elit ipsum, blandit eu ex vel, facilisis vehicula ligula.
        Nullam at arcu vitae risus congue ullamcorper et ac dolor. Sed eu
        nibh eros. Fusce fringilla magna id massa porta, a facilisis felis
        dignissim. Nullam interdum quis nisl ac consectetur.
      </p>
      <p>
        Duis vehicula,
        nunc vel tempor scelerisque, ante diam vulputate nunc, non
        porttitor diam augue ac quam. Sed accumsan velit eu diam sodales
        tristique. Aliquam cursus, nulla a cursus consequat, augue nisi
        sagittis felis, eu dignissim turpis erat sit amet metus. Donec
        iaculis, dui eu euismod maximus, enim urna egestas ante, nec
        commodo libero justo vel mi.
      </p>

      <div class="separator"></div>

      <h3>small tags</h3>
      <p>
        Small tags will reduce the font size to 80% of the inherited size. Here is a P tag with a nested small tag inside of it:
      </p>
      <p>
        <small>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sed purus magna, placerat ac tincidunt nec, ultricies rhoncus
        elit. Sed ultrices finibus urna vel finibus. Pellentesque sit amet
        tincidunt tortor. Vivamus sit amet metus dolor.
        </small>
      </p>
    </div>
  </div>
</template>

<style scoped>
  @import '~dh2o-atlantis/scss/_partials.scss';

  h1, h2, h3, h4, h5, h6 {
    display: inline;
  }

  .bold-weight {
    font-weight: $font-weight-bold;
  }
</style>
