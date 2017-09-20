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
  <div id="content-buttons">
    <div class="bar"><h1>Buttons</h1></div>
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

      <div class="widget body">
        <p>
          You might also want to use a button for purely semantic reasons.
          The <code class="language-markup">unstyled</code> class removes
          all native browser styling from a button so you can style it however
          you need to:
        </p>

        <code-sample>
          <button class="unstyled">An unstyled button</button>
        </code-sample>

      </div>

    </div>
  </div>
</template>
