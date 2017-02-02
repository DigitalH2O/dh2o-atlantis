<template>
  <div id="content-lists" class="section">
    <div class="title"><h1>Lists</h1></div>
    <div class="content">
      <p>By default our <code class="language-css">ul</code> and <code class="language-css">ol</code> tags do not have standard bulleted list styles applied due to our CSS reset. They will look the same unless you apply the <code class="language-css">.list</code> class to the <code class="language-css">ul</code> or <code class="language-css">ol</code> tag.</p>
      <div>
        <code-sample>
          <ul class="bulleted-list">
            <li>First Item</li>
            <li>Second Item</li>
          </ul>
        </code-sample>
      </div>

      <div>
        <code-sample>
          <ol class="ordered-list">
            <li>First Item</li>
            <li>Second Item</li>
          </ol>
        </code-sample>
      </div>

    </div>

  </div>
</template>

<style>
  @import '../../../src/scss/_partials';

  #content-lists {
    .code-sample {
      display: flex;
      align-items: center;
    }
  }

</style>
