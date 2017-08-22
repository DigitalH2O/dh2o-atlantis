<script>
  import Vue from 'vue'
  import dh2oDropdown from 'dh2o-atlantis/components/dropdowns/dropdowns.js'
  export default {
    data () {
      return {
        showDropdownContents: false
      }
    },
    mounted () {
      dh2oDropdown('program_trigger', false, (isShowing) => {
        this.showDropdownContents = isShowing
      })
    }
  }
</script>

<style lang="scss">
  #content-dropdowns {
    .code-sample {
      .as-rendered, .as-code {
        display: block;
        width: 100%;
      }
    }

    #program_trigger {
      .dh2o-dropdown-content {
        padding: 10px;
      }
    }
  }
</style>

<template>
  <div id="content-dropdowns">
    <div class="bar"><h1>Dropdowns</h1></div>
    <div class="stage">
      <div class="widget body">
        <p>
          The dropdown menu styles are applied through 2 main classes: "dh2o-dropdown-trigger" and "dh2o-dropdown-content". The trigger class needs to be applied to the parent element of the content class. This is because the dropdown content is positioned relative to the position of the button.
        </p>
        <div class="dh2o-dropdown-container">
          <div class="dh2o-dropdown-trigger btn"><span>User Menu</span></div>
          <div class="dh2o-dropdown-content">
            <ul class="menu">
              <li>Option 1</li>
              <li aria-selected="true">Option 2 (selected)</li>
              <li>Option 3</li>
              <li aria-disabled="true">Option 4 (disabled)</li>
              <li>Option 5</li>
            </ul>
          </div>
        </div>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <div class="dh2o-dropdown-container">
                <div class="dh2o-dropdown-trigger btn"><span>User Menu</span></div>
                <div class="dh2o-dropdown-content"></div>
              </div>
            </script>
          </code>
        </pre>
      </div>

      <div class="widget">
        <header><h2>Menus</h2></header>
        <div class="body">
          <p>
            Dropdown content by default is an empty container but in most cases you will want to add a styled menu. If you need to have separated groups in the menu, use the "end-menu-group" class.
          </p>

          <ul class="menu">
            <li>Option 1</li>
            <li aria-selected="true">Option 2 (selected)</li>
            <li class="end-menu-group">Option 3</li>
            <li aria-disabled="true">Option 4 (disabled)</li>
            <li>Option 5</li>
          </ul>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <ul class="menu">
                  <li>Option 1</li>
                  <li aria-selected="true">Option 2 (selected)</li>
                  <li class="end-menu-group">Option 3</li>
                  <li aria-disabled="true">Option 4 (disabled)</li>
                  <li>Option 5</li>
                </ul>
              </script>
            </code>
          </pre>
        </div>
      </div>

      <div class="widget">
        <header><h2>Javascript Triggers</h2></header>
        <div class="body">
          <p>You can also programmably trigger showing the dropdown</p>
          <div id="program_trigger" class="dh2o-dropdown-container">
            <div class="dh2o-dropdown-trigger btn">Button</div>
            <div class="dh2o-dropdown-content">
              <div v-if="showDropdownContents">Content here</div>
            </div>
          </div>
          <div style="display: inline-block;">Is dropdown showing: {{showDropdownContents}}</div>

          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div id="program_trigger" class="dh2o-dropdown-container">
                  <div class="dh2o–dropdown-trigger btn">Button</div>
                  <div class="dh2o-dropdown-content">
                    Content Here
                  </div>
                </div>
              </script>
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              <script type="prism-javascript">
                dh2oDropdown('program_trigger', false, (isShowing) => {
                  console.log(isShowing)
                })
              </script>
            </code>
          </pre>

          <div class="message alert">
            Do not use button element for dropdowns.
            Firefox does not like it.
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
