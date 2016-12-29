<style lang="scss">
  @import '~dh2o-atlantis/scss/_partials.scss';

  #group-section {
    .as-rendered, .as-code {
      display: block;
      width: auto;
    }
  }
</style>

<template>
  <div id="group-section" class="section">
    <div class="title"><h1>Groups</h1></div>
    <div class="content">
      <h3>Button Group</h3>
      <p>Use <code class="language-css">.btn-group</code> to group buttons or place buttons with a flat side next to other elements such as drop downs.</p>

      <code-sample>
        <div class="btn-group">
          <div class="btn">One</div>
          <div class="btn">Two</div>
          <div class="btn">Three</div>
        </div>
      </code-sample>

      <div class="separator"></div>

      <code-sample>
        <div class="inline-form form-group">
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
          <div class="btn primary save-btn">Save Form</div>
          <input type="text" placeholder="Search Values" />
          <div class="btn primary save-btn">Save Form</div>
        </div>

        <div class="btn primary save-btn">Save Form</div>
      </code-sample>

    </div>
  </div>
</template>
