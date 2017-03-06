<template>
  <article id="content-sidebar">
    <header><h1>Sidebar</h1></header>
    <div class="content">

      <section>
        <p>
          Although navigation may change depending on the application
          we have a very simple implementation that is easy to implement.
          Just add the below code to the sidebar div.
        </p>
        <p>You can also add an image if you need to.</p>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <nav>
                <a class="link">Link 1</a>
                <a class="link">Link 2</a>
                <a class="link">Link 3</a>
              </nav>
            </script>
          </code>
        </pre>
      </section>

      <section>
        <header><h2>Active State</h2></header>
        <p>In order to show active state just add the active class to the a tag.</p>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <a class="active" href="#">Link tag</a>
            </script>
          </code>
        </pre>
      </section>

      <section>
        <header><h2>Separators</h2></header>
        <p>
          If you need to add a line separator in a menu item.
          Just add an element with the value of separator.
        </p>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <div class="separator"></div>
            </script>
          </code>
        </pre>
      </section>
      
    </div>
  </article>
</template>
