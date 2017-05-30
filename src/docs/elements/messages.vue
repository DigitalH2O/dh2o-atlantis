<script>
  import colorVars from '!!sass-extract-loader!../../../src/scss/misc/_colors.scss'

  export default {
    data () {
      return {
        colors: colorVars.global['$message-colors'].value
      }
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/_partials';

  #content-messages {
    .code-sample {
      .as-code, .as-rendered {
        display: block;
        width: 100%;
      }
    }

    .message {
      margin-bottom: $spacing-half;
    }
  }
</style>

<template>
  <article id="content-messages">
    <div class="bar"><h1>Messages</h1></div>
    <div class="stage">

      <div class="widget body">
        <code-sample>
          <div class="message success">Success message</div>
          <div class="message warning">Warning message</div>
          <div class="message alert">Alert message</div>
          <div class="message notice">Notice message</div>
        </code-sample>
      </div>

      <div class="widget">
        <header><h2>Flush</h2></header>
        <div class="body">
          <p>
            In situations where you need to tight flush fit with no margins
            or rounded corners. Just add flush.
          </p>

          <code-sample>
            <div class="message success flush">Success message</div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Colors</h2></header>
        <div class="body">
          <pre>
            <code class="language-scss">
              $success-color  : {{colors.success.value.hex}};
              $warning-color  : {{colors.warning.value.hex}};
              $alert-color    : {{colors.alert.value.hex}};
              $notice-color   : {{colors.notice.value.hex}};
            </code>
          </pre>
        </div>
      </div>

    </div>
  </article>
</template>
