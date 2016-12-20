<template>
  <div id="content-buttons" class="section">
    <div class="title"><h1>Buttons</h1></div>
    <div class="content">
      <p>
        As much like everything else. Buttons keep a clean consitance
        with our color system. Hover stats are just a darkening of
        their original color.
      </p>

      <code-sample>
        <button class="btn">Regular</button>
      </code-sample>

      <code-sample>
        <button class="btn primary">Primary</button>
      </code-sample>

      <code-sample>
        <button class="btn secondary">Secondary</button>
      </code-sample>

      <code-sample>
        <button class="btn inactive">Inactive</button>
      </code-sample>

      <div class="separator"></div>

      <h2>Button Group</h2>
      <p>Use <code class="language-css">.btn-group</code> to group buttons or place buttons with a flat side next to other elements such as drop downs.</p>

      <code-sample>
        <span class="btn-group">
          <span class="btn">One</span>
          <span class="btn">Two</span>
          <span class="btn">Three</span>
        </span>
      </code-sample>

      <div class="separator"></div>

      <h2>Tags</h2>
      <p>Tags look like small versions of "regular" buttons.</p>

      <code-sample>
        <span class="dh2o-tag">Tag</span>
      </code-sample>
    </div>
  </div>

</template>

<style lang="scss">
  #content-buttons {
    .code-sample {
      display: flex;
      flex-direction: row;
      .as-rendered { flex: 0 1 20%; }
      .as-code { flex: 1 1 auto; }
    }
  }
</style>
