<style lang="scss">
  @import '../../../src/scss/_partials.scss';

  #group-section {
    .as-rendered, .as-code {
      display: block;
      width: auto;
    }
  }
</style>

<template>
  <div id="group-section">
    <div class="bar"><h1>Groups</h1></div>
    <div class="stage">

      <div class="widget">
        <header><h2>Button Group</h2></header>
        <div class="body">
          <p>Use <code class="language-css">.group-inline</code> to group buttons or place buttons with a flat side next to other elements such as drop downs.</p>

          <code-sample>
            <div class="group-inline">
              <div class="btn">One</div>
              <div class="btn">Two</div>
              <div class="btn">Three</div>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Input Group</h2></header>
        <div class="body">
          <code-sample>
            <div class="group-inline">
              <div class="btn"><i class="fa fa-usd" aria-hidden="true"></i>&nbsp;</div>
              <input type="number" placeholder="0.00" />
              <div class="btn primary">Submit</div>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Dropdown Group</h2></header>
        <div class="body">
          <code-sample>
            <div class="group-inline">
              <div class="dh2o-dropdown-trigger btn">
                <div class="dh2o-dropdown-trigger-text">
                  Search Values <i class="fa fa-caret-down"></i>
                </div>
                <div class="dh2o-dropdown-content">
                  <ul>
                    <li class="menu-item">Value 1</li>
                    <li class="menu-item">Value 2</li>
                  </ul>
                </div>
              </div>
              <input type="text" placeholder="Search Values" />
              <div class="btn primary">Save Form</div>
            </div>
          </code-sample>
        </div>
      </div>

    </div>
  </div>
</template>
