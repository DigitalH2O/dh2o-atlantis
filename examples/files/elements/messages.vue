<template>
  <div id="content-messages" class="section">
  <div class="title"><h1>Messages</h1></div>
  <div class="content">
    <div class="message success">Success message</div>
    <div class="message warning">Warning message</div>
    <div class="message alert">Alert message</div>
    <div class="message notice">Notice message</div>
    <pre>
      <code class="language-markup">
        <script type="prism-html-markup">
          <div class="message success">Success message</div>
          <div class="message warning">Warning message</div>
          <div class="message alert">Alert message</div>
          <div class="message notice">Notice message</div>
        </script>
      </code>
    </pre>

    <div class="seperator"></div>

    <h3>Flush</h3>
    <p>
      In situations where you need to tight flush fit with no margins
      or rounded corners. Just add flush.
    </p>
    <div class="message success flush">Success message</div>
    <pre>
      <code class="language-markup">
        <script type="prism-html-markup">
          <div class="message success flush">Success message</div>
        </script>
      </code>
    </pre>

    <div class="seperator"></div>

    <h3>Colors</h3>
    <pre>
      <code class="language-scss">
        $success-color  : #719d46;
        $warning-color  : #efaa1b;
        $alert-color    : #b63813;
        $notice-color   : #1b7a9d;
      </code>
    </pre>

  </div>
</div>
</template>
