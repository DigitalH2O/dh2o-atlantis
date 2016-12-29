<style lang="scss">
  #content-buttons {
    .code-sample {
      display: flex;
      flex-direction: column;
      .as-rendered { flex: 0 1 auto; }
      .as-code { flex: 1 1 auto; }
    }
  }
</style>

<template>
  <div id="content-buttons" class="section">
    <div class="title"><h1>Tags</h1></div>
    <div class="content">
      <p>
        Tags are a way of showing small labels for visual
        markers correlating differencial pieces of information.
      </p>
      <div class="tag">Tag</div>

      <code class="language-markup">
        <script type="prism-html-markup">
          <div class="tag">Tag</div>
        </script>
      </code>
    </div>
  </div>

</template>
