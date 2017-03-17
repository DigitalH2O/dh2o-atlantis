<script>
  import fontIcons from '!!sass-extract-loader!../../../src/scss/images/_variables.scss'

  export default {
    data () {
      return {
        fontIcons: fontIcons.global['$font-icons'].value
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/_partials';

  #content-images {
    .logos {
      .code-sample {
        display: flex;

        .as-rendered {
          margin: 0 $spacing-half 0 0;
          flex: 0 0 40%;
        }
        .as-code {
          flex: 1 1 auto;
        }
      }
    }
    .logos-droplet {
      .code-sample {
        display: flex;

        .as-rendered {
          margin: 0 $spacing-half 0 0;
          flex: 0 0 150px;
        }
        .as-code {
          flex: 1 1 auto;
        }
      }
    }

    .custom-icons {
      .code-sample {
        .as-rendered {
          width: 10%;
        }
        .as-code {
          width: 89%;
        }
      }

      .navigation {
        .as-rendered {
          padding: $spacing-half;
          width: 8%;
        }

        .inactive {
          .as-rendered { background-color: $secondary-color; }
        }

        .active {
          .as-rendered { background-color: $primary-color; }
        }
      }
    }

    .loading-icons {
      .code-sample {
        display: flex;

        .as-rendered {
          margin: 0 $spacing-half 0 0;
          flex: 0 0 150px;
        }
        .as-code {
          flex: 1 1 auto;
        }
      }
    }

    .bg-primary {
      padding: 3px;
      background-color: $primary-color;
    }
  }
</style>

<template>
  <article id="content-images">
    <header><h1>Images</h1></header>
    <div class="widget">
      <div class="widget-body">
        <section>
          <header><h2>Logos</h2></header>
          <p>Our logos are SVG images included in Atlantis as data URLs. Applying a logo class (e.g. <code class="language-css">dh2o-logo-color</code>) sets the logo as a background image. You'll still need to set the element's size yourself (in these examples, the <code class="language-css">logo-example</code> class sets <code class="language-css">height: 100px;</code>.</p>

          <section class="logos">
            <code-sample>
              <img src="~dh2o-atlantis/images/logo-color.svg" />
            </code-sample>

            <code-sample>
              <div class="bg-primary">
                <img src="~dh2o-atlantis/images/logo-white.svg" />
              </div>
            </code-sample>
          </section>

          <div class="separator smaller"></div>

          <section class="logos-droplet">
            <code-sample>
              <img src="~dh2o-atlantis/images/logo-droplet-color.svg" style="width: 150px;" />
            </code-sample>

            <code-sample>
              <div class="bg-primary">
                <img src="~dh2o-atlantis/images/logo-droplet-white.svg" style="width: 150px;" />
              </div>
            </code-sample>
          </section>
        </section>

        <section class="custom-icons">
          <header><h2>Custom Icons</h2></header>
          <p>Our custom icons are included as an icon font, similar to FontAwesome:</p>

          <div>
            <div v-for="(characterCode, iconName) in fontIcons">
              <code-sample>
                <i :class="`dh2o-icon-${iconName}`"></i>
              </code-sample>
            </div>
          </div>

          <p>We also have a few two-tone navigation icons, which are distributed
          as SVGs. Each has a normal state for a <code class="language-markup">$secondary-color</code>
          background, and an active state for a <code class="language-markup">$primary-color</code>background.</p>

          <div class="navigation">
            <div>
              <div class="inactive">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-analytics.svg" />
                </code-sample>
              </div>
              <div class="active">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-analytics-active.svg" />
                </code-sample>
              </div>
            </div>

            <div>
              <div class="inactive">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-assets.svg" />
                </code-sample>
              </div>
              <div class="active">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-assets-active.svg" />
                </code-sample>
              </div>
            </div>

            <div>
              <div class="inactive">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-dashboard.svg" />
                </code-sample>
              </div>
              <div class="active">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-dashboard-active.svg" />
                </code-sample>
              </div>
            </div>

            <div>
              <div class="inactive">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-watertransfer.svg" />
                </code-sample>
              </div>
              <div class="active">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-watertransfer-active.svg" />
                </code-sample>
              </div>
            </div>

            <div>
              <div class="inactive">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-waterforecast.svg" />
                </code-sample>
              </div>
              <div class="active">
                <code-sample>
                  <img src="~dh2o-atlantis/images/icon-waterforecast-active.svg" />
                </code-sample>
              </div>
            </div>

          </div>
        </section>

        <section class="generic-icons">
          <header><h2>Generic Icons</h2></header>
          <p>For other icons, we use <a href="http://fontawesome.io/">FontAwesome</a>, which is included in the style library automatically.</p>
        </section>

        <section class="loading-icons">
          <header><h2>Loading Icons</h2></header>
          <p>We have two different loading icons: a fancy animated SVG barrel for browsers that support it (i.e. Chrome, Opera) and a less-fancy non-animated SVG barrel for other browsers.</p>

          <code-sample>
            <img height="200" src="~dh2o-atlantis/images/loading-barrel.svg" />
          </code-sample>

          <code-sample>
            <img height="200" src="~dh2o-atlantis/images/loading-barrel-static.svg" />
          </code-sample>
        </section>
      </div>
    </div>
  </article>
</template>
