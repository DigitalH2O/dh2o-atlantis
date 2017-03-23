<style lang="scss">
  #content-articles {
    .widget {
      article {
        min-height: 100px;
        min-width: 300px;
        max-width: 500px;
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

    <div class="stage">
      <div class="widget body">
        <p>
          Articles are the blank slate within the main element. The use of articles
          is valuable when i comes to the loading of main route sections. Each of the pages
          within the style guide start with an article and have a id on them to easily target
          that section of information.
        </p>
        <code-sample>
          <article id="article-id"></article>
        </code-sample>
      </div>

      <div class="widget">
        <header><h2>Stage</h2></header>
        <div class="body">
          <p>
            Stage gives margin around the body section and flexes items within itself.
            If you
          </p>
          <h4>Columns</h4>
          <code-sample>
            <article>
              <div class="stage">
                <div class="widget body">Hello</div>
                <div class="widget body">Hello</div>
              </div>
            </article>
          </code-sample>
          <br /><br />

          <h4>Rows</h4>
          <code-sample>
            <article>
              <div class="stage row">
                <div class="widget body">Hello</div>
                <div class="widget body">Hello</div>
                <div class="widget body">Hello</div>
              </div>
            </article>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Widgets</h2></header>
        <div class="body">
          <p>
            A widget is a self contained piece of infomation that primarily consists of a
            header and a body. If no header is needed you may just delare the body next to
            the widget class.
          </p>
          <code-sample>
            <article>
              <div class="stage">
                <div class="widget body">
                  This is a widget.
                </div>
              </div>
            </article>
          </code-sample>
          <br /><br /><br />

          <p>
            Some widgets may <strong>also</strong> have a <code class="language-markup">&lt;header&gt;</code>
            preceding their <code class="language-css"> .body</code>. You can use
            <code class="language-css">.titlebar</code>, <code class="language-css">.title</code>,
            <code class="language-css">.subtitle</code>, and <code class="language-css">.toolbar</code>
            as below to create a title, subtitle and options menu. Note that the dropdown menu inside
            <code class="language-css">.toolbar</code> is a <router-link to="/dropdowns">standard dropdown
            </router-link> containing a <router-link to="/menus">standard menu </router-link>.
          </p>
          <code-sample>
            <article>
              <div class="stage">
                <div class="widget">
                  <header>
                    <div class="titlebar">
                      <span class="title">
                        Widget title
                      </span>
                      <span class="subtitle">
                        Widget subtitle
                      </span>
                    </div>
                    <div class="toolbar">
                      <div class="other-menu"><i class="fa fa-pencil"></i></div>
                      <div class="dh2o-dropdown-container trigger">
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
              </div>
            </article>
          </code-sample>
        </div>
      </div>
    </div>

  </article>
</template>
