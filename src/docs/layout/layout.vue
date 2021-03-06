<template>
  <div id="content-layout">
    <div class="bar"><h1>Layout</h1></div>

    <div class="bar">
      This is a <code class="language-css">.bar</code>, which can contain menus and options.
      Put them directly inside of <code class="language-css">.main</code>.
      <div class="btn primary">Button</div>
    </div>
    <div class="bar secondary">
      This is a <code class="language-css">.bar.secondary</code>, used for lower level
      controls.
      <div class="btn primary">Button</div>
    </div>

    <div class="stage">
      <div class="widget body">
        <p>The main application primarily consists of three elements wrapped in
          a div with the class of "app" for the application to mount to.</p>
        <p>
          <b>App</b> - Main app container<br />
          <b>Header</b> - Main blue top bar<br />
          <b>Sidebar</b> - Main left dark blue bar<br />
          <b>Main</b> - Main center section. Usually contains <strong>only</strong>
          a <code class="language-css">.stage</code> and (sometimes) <code class="language-css">.bar</code>s.
        </p>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <div class="app">
                <header></header>
                <div class="container">
                  <aside></aside>
                  <div class="main"></div>
                </div>
              </div>
            </script>
          </code>
        </pre>
      </div>

      <div class="widget">
        <header><h2>Variables</h2></header>
        <div class="body">
          <p>
            There are two variables that define the height of the header and
            the width of sidebar. These can be used for adjusting values when
            pulling importing the scss into your application. Main container
            body will adjust automatically.
          </p>
          <pre>
            <code class="language-scss">
              $header-height: 65px; // Height of main header
              $sidebar-width: 100px; // Width of main sidebar
            </code>
          </pre>
        </div>
      </div>

      <div class="widget">
        <header><h2>Logo and Website Name</h2></header>
        <div class="body">
          <p>
            Place this tag in your header to add the company logo as a link.
            The logo should link to the home page of your app.
          </p>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div class="website">
                  <a href="/" class="logo"></a>
                  <a href="/" class="name">Style Guide App</a>
                </div>
              </script>
            </code>
          </pre>
        </div>
      </div>

      <div class="widget">
        <header><h2>User Info</h2></header>
        <div class="body">
          <p>To place user info in the upper right hand section of the header we use the code listed below.</p>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div class="user-menu">
                  <div class="user-menu-btn">
                    <i class="dh2o-icon-user"></i>
                    <span class="user-name">User Menu</span>
                  </div>
                </div>
              </script>
            </code>
          </pre>
          <p>If you just need a dropdown integration</p>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div class="user-menu dh2o-dropdown-container">
                  <div class="dh2o-dropdown-trigger user-menu-btn">
                    <i class="dh2o-icon-user"></i>
                    <span class="user-name">User Menu</span>
                    <i class="fa fa-caret-down"></i>
                  </div>
                  <div class="dh2o-dropdown-content">
                    <ul class="menu">
                      <li class="menu-item">User Account</li>
                      <li class="menu-item">Logout</li>
                    </ul>
                  </div>
                </div>
              </script>
            </code>
          </pre>
        </div>
      </div>

      <div class="widget">
        <header><h2>Stage</h2></header>
        <div class="body">
          <p>
            A <code class="language-css">.stage</code> is a container for
            <code class="language-css">.widget</code>s. It has padding, and
            arranges its children via Flexbox.
          </p>

          <p>By default, a stage will expand to contain its children (causing
          a scroll). If you need a stage that doesn't scroll, add <code class="language-css">.no-scroll</code>.</p>

          <h4>Columns</h4>
          <code-sample>
            <div>
              <div class="stage">
                <div class="widget body">Hello</div>
                <div class="widget body">Hello</div>
              </div>
            </div>
          </code-sample>
          <br /><br />

          <p><code class="language-css">.stage</code> uses
          <code class="language-css">flex-direction: column</code> by default.
          To switch to <code class="language-css">flex-direction: row</code>,
          add <code class="language-css">.row</code>.</p>

          <h4>Rows</h4>
          <code-sample>
            <div>
              <div class="stage row">
                <div class="widget body">Hello</div>
                <div class="widget body">Hello</div>
                <div class="widget body">Hello</div>
              </div>
            </div>
          </code-sample>
        </div>
      </div>

    </div>
  </div>
</template>
