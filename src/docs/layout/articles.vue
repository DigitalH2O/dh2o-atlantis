<template>
  <article id="content-sections">
    <header><h1>Articles</h1></header>
    <div class="bar">
      Here is our article bar.
      <div class="btn primary">Button</div>
    </div>
    <div class="bar secondary">
      Here is our article secondary bar.
      <div class="btn primary">Button</div>
    </div>
    <div class="widget">
      <div class="widget-header">
        <div class="widget-title">
          <span class="title-text">Metric</span>
          <span class="dates-text">dates go here</span>
        </div>
      </div>
      <div class="widget-body">
        <section>
          <p>
            Sections are our partial blocks of information.
            Usually you will only have one section per page.
            But as you can see in this doc you can create as many as you want
            and it will automatically adjust based upon the container its in.
          </p>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <article>
                  <header>Section title</header>
                  <div class="widget">Main content area</div>
                </article>
              </script>
            </code>
          </pre>

          <p>You can even add a section in a section</p>
          <!-- article element is placed here for documentation purposes only -->
          <!-- In normal development articles should not be placed in sections -->
          <article>
            <header>Title</header>
            <div class="widget">Content</div>
            <div class="separator"></div>
          </article>
        </section>

        <section>
          <header><h2>Sections</h2></header>
          <p>
            Section are nested pieces of information within the article element.
            They provide additional spacing and line separation between other sections.
          </p>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <article>
                  <header>Section title</header>
                  <div class="widget">
                    <section></section>
                  </div>
                </article>
              </script>
            </code>
          </pre>
        </section>
      </div>
    </div>
  </article>
</template>
