<script>
  export default {
    data() {
      return {
        fontIcons: require('dh2o-atlantis/scss/shared.json')['font-icons'],
        twoToneIcons: ['analytics', 'assets', 'dashboard', 'watertransfer']
      };
    }
  }
</script>

<template>
  <div id="content-images" class="section">
    <div class="title"><h1>Images</h1></div>
    <div class="content">
      <section class="logos">
        <h3>Logos</h3>

        <p>Our logos are SVG images included in Atlantis as data URLs. Applying a logo class (e.g. <code class="language-css">dh2o-logo-color</code>) sets the logo as a background image. You'll still need to set the element's size yourself (in these examples, the <code class="language-css">logo-example</code> class sets <code class="language-css">height: 100px;</code>.</p>

        <code-sample>
          <img src="~dh2o-atlantis/images/logo-color.svg" />
        </code-sample>


        <div class="seperator smaller"></div>

        <code-sample>
          <div style="padding: 3px; background-color: #31708f;">
            <img src="~dh2o-atlantis/images/logo-white.svg" />
          </div>
        </code-sample>

        <div class="seperator smaller"></div>

        <code-sample>
          <img src="~dh2o-atlantis/images/logo-droplet-color.svg" style="width: 150px;" />
        </code-sample>

        <code-sample>
          <div style="background-color: #31708f; padding: 5px; width: 150px;">
            <img src="~dh2o-atlantis/images/logo-droplet-white.svg" />
          </div>
        </code-sample>

      <div class="seperator"></div>

      <section class="custom-icons">
        <h3>Custom Icons</h3>
        <p>Our custom icons are included as an icon font, similar to FontAwesome:</p>

        <div class="row">
          <div v-for="(characterCode, iconName) in fontIcons" class="col-xs-6">
            <code-sample>
              <i :class="`dh2o-icon-${iconName}`"></i>
            </code-sample>
          </div>
        </div>

        <p>We also have a few two-tone navigation icons, which are distributed
        as SVGs. Each has a normal state, and an active state intended for a
        <code class="language-markup">$primary</code> background.</p>
      </section>





      <div class="seperator smaller"></div>

      <section class="generic-icons">
        <h3>Generic Icons</h3>
        <p>For other icons, we use <a href="http://fontawesome.io/">FontAwesome</a>, which is included in the style library automatically.</p>
      </section>

      <div class="seperator smaller"></div>

      <section class="loading-icons">
        <h3>Loading Icons</h3>
        <p>We have two different loading icons: a fancy animated SVG barrel for browsers that support it (i.e. Chrome, Opera) and a less-fancy non-animated SVG barrel for other browsers.</p>

        <code-sample>
          <div style="max-height: 200px;">
            <img height="200" src="~dh2o-atlantis/images/loading-barrel.svg" />
          </div>
        </code-sample>

        <code-sample>
          <div style="max-height: 200px;">
            <img height="200" src="~dh2o-atlantis/images/loading-barrel-static.svg" />
          </div>
        </code-sample>
      </section>

    </div>
  </div>
</template>

<style>
  section.logos, section.loading-icons {
    .code-sample {
      .as-rendered {
        width: 25%;
      }
      .as-code {
        width: 74%;
      }
    }
  }

  section.custom-icons {
    .code-sample {
      .as-rendered {
        width: 10%;
      }
      .as-code {
        width: 89%;
      }
    }
  }


</style>
