<template>
  <div id="content-images" class="section">
    <div class="title"><h1>Images</h1></div>
    <div class="content">
      <h3>Logos</h3>

      <p>Our logos are SVG images included in Atlantis as data URLs. Applying a logo class (e.g. <code class="language-css">dh2o-logo-color</code>) sets the logo as a background image. You'll still need to set the element's size yourself (in these examples, the <code class="language-css">logo-example</code> class sets <code class="language-css">height: 100px;</code>.</p>

      <div class="row">
          <div class="col-xs-6">
            <div class="dh2o-logo-color" style="height: 100px;"></div>
          </div>
          <div class="col-xs-6">
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <div class="dh2o-logo-color" style="height: 100px;"></div>
                </script>
              </code>
            </pre>
          </div>
      </div>

      <div class="seperator smaller"></div>

      <div class="row">
          <div class="col-xs-6" style="background-color: #31708f;">
            <div class="dh2o-logo-white" style="height: 100px"></div>
          </div>
          <div class="col-xs-6">
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <div class="dh2o-logo-white" style="height: 100px"></div>
                </script>
              </code>
            </pre>
          </div>
      </div>

      <div class="seperator smaller"></div>

      <div class="row">
          <div class="col-xs-2">
            <div class="dh2o-logo-droplet-color" style="height: 200px;"></div>
          </div>
          <div class="col-xs-4">
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <div class="dh2o-logo-droplet-color" style="height: 200px;"></div>
                </script>
              </code>
            </pre>
          </div>
          <div class="col-xs-2" style="background-color: #31708f;">
            <div class="dh2o-logo-droplet-white" style="height: 200px;"></div>
          </div>
          <div class="col-xs-4">
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <div class="dh2o-logo-droplet-white" style="height: 200px;"></div>
                </script>
              </code>
            </pre>
          </div>
      </div>

      <div class="seperator"></div>

      <h3>Custom Icons</h3>

      <p>Our custom icons are included as an icon font, similar to FontAwesome:</p>

      <div class="row">
      <template v-for="(characterCode, iconName) in fontIcons">
        <div class="col-xs-2">
          <i :class="`dh2o-icon-${iconName}`"></i>
        </div>
        <div class="col-xs-4">
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <i class="dh2o-icon-{{iconName}}"></i>
              </script>
            </code>
          </pre>
        </div>
      </template>

      </div>
      <div class="seperator smaller"></div>

      <h3>Generic Icons</h3>
      <p>For other icons, we use <a href="http://fontawesome.io/">FontAwesome</a>, which is included in the style library automatically.</p>

      <div class="seperator smaller"></div>

      <h3>Loading Icons</h3>
      <p>We have two different loading icons: a fancy animated SVG barrel for browsers that support it (i.e. Chrome, Opera) and a less-fancy non-animated SVG barrel for other browsers.</p>

      <div class="row">
        <div class="col-xs-3">
          <div class="dh2o-loading-barrel" style="height: 200px;"></div>
        </div>
        <div class="col-xs-9">
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div class="dh2o-loading-barrel" style="height: 200px;"></div>
              </script>
            </code>
          </pre>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-3">
          <div class="dh2o-loading-barrel-static" style="height: 200px;"></div>
        </div>
        <div class="col-xs-9">
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div class="dh2o-loading-barrel-static" style="height: 200px;"></div>
              </script>
            </code>
          </pre>
        </div>
      </div>


    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        fontIcons: require('dh2o-atlantis/scss/shared.json')['font-icons']
      };
    }
  }
</script>
