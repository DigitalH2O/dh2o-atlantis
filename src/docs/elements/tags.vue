<style lang="scss">
  @import '../../../src/scss/_partials.scss';

  #content-tags {
    .code-sample {
      display: flex;
      flex-direction: column;
      .as-rendered { flex: 0 1 auto; }
      .as-code { flex: 1 1 auto; }
    }

    .tag-container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 500px;

      .tag {
        margin: 0 $spacing-quarter $spacing-quarter 0;
      }
    }
  }
</style>

<template>
  <div id="content-tags">
    <div class="bar"><h1>Tags</h1></div>
    <div class="stage">
      <div class="widget body">
        <p>
          Tags are a way of showing small labels for visual
          markers correlating differencial pieces of information.
        </p>
        <div class="tag-container">
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
          <div class="tag">Tag</div>
        </div>

        <code class="language-markup">
          <script type="prism-html-markup">
            <div class="tag">Tag</div>
          </script>
        </code>
      </div>

    </div>
  </div>
</template>
