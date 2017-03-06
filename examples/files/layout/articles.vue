<template>
  <section id="content-sections">
    <div class="title"><h1>Sections</h1></div>
    <div class="bar">
      Here is our section bar.
      <div class="btn primary">Button</div>
    </div>
    <div class="bar secondary">
      Here is our section secondary bar.
      <div class="btn primary">Button</div>
    </div>
    <div class="content">
      <p>
        Sections are our partial blocks of information.
        Usually you will only have one section per page.
        But as you can see in this doc you can create as many as you want
        and it will automatically adjust based upon the container its in.
      </p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <section>
              <div class="title">Section title</div>
              <div class="content">Main content area</div>
            </section>
          </script>
        </code>
      </pre>

      <p>You can even add a section in a section</p>
      <section>
        <div class="title">Title</div>
        <div class="content">Content</div>
        <div class="separator"></div>
      </section>

      <div class="separator"></div>

      <h3>Section Bar</h3>
      <p>
        Section may need a section bar.
        Easily just call it inside the section element.
        You can see a better use of the section bar
        right below this sections title.
      </p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <section>
              <div class="title">Section title</div>
              <div class="bar">Section bar</div>
              <div class="bar secondary">Section bar</div>
              <div class="content">Main content area</div>
            </section>
          </script>
        </code>
      </pre>

    </div>
  </section>
</template>
