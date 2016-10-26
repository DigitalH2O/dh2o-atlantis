<template>
  <div id="content-messages" class="section">
  <div class="title"><h1>Messages</h1></div>
  <div class="content">
    <code-sample>
      <div class="message success">Success message</div>
      <div class="message warning">Warning message</div>
      <div class="message alert">Alert message</div>
      <div class="message notice">Notice message</div>
    </code-sample>

    <div class="seperator"></div>

    <h3>Flush</h3>
    <p>
      In situations where you need to tight flush fit with no margins
      or rounded corners. Just add flush.
    </p>

    <code-sample>
      <div class="message success flush">Success message</div>
    </code-sample>

    <div class="seperator"></div>

    <h3>Colors</h3>
    <pre>
      <code class="language-scss">
        $success-color  : {{colors.success}};
        $warning-color  : {{colors.warning}};
        $alert-color    : {{colors.alert}};
        $notice-color   : {{colors.notice}};
      </code>
    </pre>

  </div>
</div>
</template>

<script>
  import styleVars from 'dh2o-atlantis/scss/shared.json';

  export default {
    data() {
      return {
        colors: styleVars.colors.message
      }
    }
  }
</script>

<style>
  @import '~dh2o-atlantis/scss/index';

  #content-messages {
    .code-sample {
      .as-code, .as-rendered {
        display: block;
        width: 100%;
      }
    }
  }
</style>
