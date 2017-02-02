<script>
  import Vue from 'vue'
  import dh2oDropdown from 'dh2o-atlantis/components/dropdowns/dropdowns.js'
  export default {
    data () {
      return {
        showDropdown: false
      }
    },
    methods: {
      click () {
        this.showDropdown = true
        Vue.nextTick(function () {
          dh2oDropdown('program_trigger')
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
  <div id="content-dropdowns" class="section">
  <div class="title"><h1>Dropdowns</h1></div>
    <div class="content">
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

      <p>You can also programmably trigger showing the dropdown</p>
      <code-sample>
        <div id="program_trigger" class="dh2o-dropdown-container">
          <div class="btn" @click="click">Button</div>
          <div v-if="showDropdown" class="dh2o-dropdown-content">
            Stuff to show here
          </div>
        </div>
      </code-sample>

      <div class="message alert">
        Do not use button element for dropdowns.
        Firefox does not like it.
      </div>

    </div>
  </div>
</template>
