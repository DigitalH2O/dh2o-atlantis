<style lang="sass-loader">
  #content-articles {
    .widget {
      article {
        min-height: 200px;
        min-width: 200px;
        display: flex;
        flex-direction: column;
      }
    }
  }
</style>

<template>
  <article id="content-articles">
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
      <div class="body">
        <section>
          <header><h2>Widgets</h2></header>
          <p>
            A widget is some content in a white box. Every
            <code class="language-css">.widget</code> should have
            a single <code class="language-css">.body</code>
            as its direct child.
          </p>

          <code-sample>
            <article>
              <div class="widget">
                <div class="body">
                  This is a widget.
                </div>
              </div>
            </article>
          </code-sample>

          <p>
            Some widgets may <strong>also</strong> have a
            <code class="language-markup">&lt;header&gt;</code>
            preceding their <code class="language-css">
            .body</code>. You can use
            <code class="language-css">.title-block</code>,
            <code class="language-css">.title</code>,
            <code class="language-css">.subtitle</code>,
            and <code class="language-css">.options</code>
            as below to create a title, subtitle and options
            menu. Note that the dropdown menu inside
            <code class="language-css">.options</code> is
            a <router-link to="/dropdowns">standard dropdown
            </router-link> containing a <router-link to="/menus">standard menu
            </router-link>.
          </p>

          <code-sample>
            <article>
              <div class="widget">
                <header>
                  <div class="title-block">
                    <span class="title">
                      Widget title
                    </span>
                    <span class="subtitle">
                      Widget subtitle
                    </span>
                  </div>
                  <div class="options">
                    <div class="dh2o-dropdown-container widget-options-trigger">
                      <div class="dh2o-dropdown-trigger"><i class="fa fa-bars" aria-hidden="true"></i></div>
                      <div class="dh2o-dropdown-content">
                        <ul class="dh2o-dropdown-menu">
                          <li>Menu item</li>
                          <li>Menu item 2</li>
                          <li>Menu item 3</li>
                          <li>Menu item 4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </header>
                <div class="body">
                  This is a widget body.
                </div>
              </div>
            </article>
          </code-sample>
        </section>

        <section>
          <header><h2>Sections</h2></header>
          <p>
            In long-running text content (like the guide you're reading now),
            you may want to split up your content into sections. Use the
            <code class="language-markup">&lt;section&gt;</code> tag, and
            optionally the <code class="language-markup">&lt;header&gt;</code>
            tag inside it to add a section header.
          </p>
          <code-sample>
            <article>
              <div class="widget">
                <div class="body">
                  <section>
                    <header><h2>Section A</h2></header>
                    <p>This is some content.</p>
                  </section>
                  <section>
                    <header><h2>Section B</h2></header>
                    <p>This is some more content.</p>
                  </section>
                </div>
              </div>
            </article>
          </code-sample>

          <p>Sections can also be nested:</p>
          <code-sample>
            <article>
              <div class="widget">
                <div class="body">
                  <section>
                    <header><h2>Section A</h2></header>
                    <p>This is some content.</p>
                  </section>
                  <section>
                    <header><h2>Section B</h2></header>
                    <p>This is some more content.</p>
                    <section>
                      <header><h3>Subsection B1</h3></header>
                      <p>This is yet more content, in a subsection.</p>
                    </section>
                  </section>
                </div>
              </div>
            </article>
          </code-sample>

        </section>
      </div>
    </div>
  </article>
</template>
