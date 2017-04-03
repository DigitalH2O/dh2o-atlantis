<script>
  import Vue from 'vue'
  import dh2oDropdown from 'dh2o-atlantis/components/dropdowns/dropdowns.js'
  export default {
    data () {
      return {
        showDropdownContents: false
      }
    },
    methods: {
      click () {
        this.showDropdown = true
        Vue.nextTick(() => {
          dh2oDropdown('program_trigger', true, (isShowing) => {
            this.showDropdownContents = isShowing
          })
        })
      }
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
  <article id="content-dropdowns">
    <header><h1>Dropdowns</h1></header>
    <div class="stage">
      <div class="widget body">
        <p>
          The dropdown menu styles are applied through 2 main classes: "dh2o-dropdown-trigger" and "dh2o-dropdown-content". The trigger class needs to be applied to the parent element of the content class. This is because the dropdown content is positioned relative to the position of the button.
        </p>
        <p>
          For the items in the dropdown menu, apply the "menu-item" class to get the hover states and borders as shown below.
        </p>
        <code-sample>
          <div class="dh2o-dropdown-container">
            <div class="dh2o-dropdown-trigger btn"><span>User Menu</span></div>
            <div class="dh2o-dropdown-content">
              <ul>
                <li class="menu-item">User Account</li>
                <li class="menu-item">Logout</li>
              </ul>
            </div>
          </div>
        </code-sample>
      </div>

      <div class="widget">
        <header><h2>Javascript Triggers</h2></header>
        <div class="body">
          <p>You can also programmably trigger showing the dropdown</p>
          <code-sample>
            <div id="program_trigger" class="dh2o-dropdown-container">
              <div class="btn" @click="click">Button</div>
              <div class="dh2o-dropdown-content">
                <div v-if="showDropdownContents">Stuff to show here</div>
              </div>
            </div>
            <div style="display: inline-block;">Is dropdown showing: {{showDropdownContents}}</div>
          </code-sample>

          <div class="message alert">
            Do not use button element for dropdowns.
            Firefox does not like it.
          </div>
        </div>
      </div>

    </div>
  </article>
</template>
