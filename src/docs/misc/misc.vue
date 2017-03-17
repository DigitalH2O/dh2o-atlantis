<template>
  <article id="content-misc">
    <header><h1>Misc</h1></header>
    <div class="widget">

      <section>
        <header><h2>Hide</h2></header>
        <p>
          To more easily allow javascript to hide and show elements
          on the page add the hide class.
        </p>
        <div class="hide">You should not see this cause it has a class of hide on it</div>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <div class="hide">Dont show me</div>
            </script>
          </code>
        </pre>
      </section>

      <section>
        <header><h2>Separators</h2></header>
        <p>
          Want to add a  divider line between elements? We have both horizontal and vertical separators.
          The vertical separator will have to be vertically aligned manually if you are floating it
          or it's parent element. The height should also be overridden depending on the height of the
          elements it is separating.
        </p>
        <div>
          <div class="btn">Button</div>
          <div class="separator vertical"></div>
          <div class="btn">Button</div>
        </div>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <div>
                <div class="btn">Button</div>
                <div class="separator vertical"></div>
                <div class="btn">Button</div>
              </div>

              <div class="separator"></div>
              <div class="separator smaller"></div> // For smaller separation
            </script>
          </code>
        </pre>
      </section>

      <section>
        <header><h2>Vertical Align</h2></header>
        <p>
          Alot of times we need an easy way to vertically align an
          element in the middle of another Here is a easy mixin you can use.
        </p>
        <p>Make sure to pass in either absolute or relative based upon your need.</p>
        <pre>
          <code class="language-scss">
            @include vertical-align(absolute);
          </code>
        </pre>
      </section>

    </div>
  </article>
</template>
