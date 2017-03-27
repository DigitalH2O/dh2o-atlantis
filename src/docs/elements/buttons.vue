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

<template>
  <article id="content-buttons">
    <header><h1>Buttons</h1></header>
    <div class="stage">

      <div class="widget body">
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
      </div>

    </div>
  </article>
</template>
