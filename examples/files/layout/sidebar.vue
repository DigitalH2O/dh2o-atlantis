<template>
  <section id="content-sidebar" class="section">
    <div class="title"><h1>Sidebar</h1></div>
    <div class="content">
      <p>
        Although navigation may change depending on the application
        we have a very simple implementation that is easy to implement.
        Just add the below code to the sidebar div.
      </p>
      <p>You can also add an image if you need to.</p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <ul class="nav">
              <li class="link"><a>Link tag</a></li>
            </ul>
          </script>
        </code>
      </pre>

      <div class="separator"></div>

      <h3>Active State</h3>
      <p>In order to show active state just add the active class to the a tag.</p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <a class="active" href="#">Link tag</a>
          </script>
        </code>
      </pre>

      <div class="separator"></div>

      <h3>Separators</h3>
      <p>
        If you need to add a line separator in a menu item. Just change
        the class of one of the li link items with separator.
      </p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <li class="separator"></li>
          </script>
        </code>
      </pre>
    </div>
  </section>
</template>
