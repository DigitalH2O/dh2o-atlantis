<template>
  <article id="content-layout">
    <header><h1>Layout</h1></header>
    <div class="widget">
      <div class="body">
        <section>
          <p>The main application primarily consists of three elements wrapped in
            a div with the class of "app" for the application to mount to.</p>
          <p>
            <b>App</b> - Main app container<br />
            <b>Header</b> - Main blue top bar<br />
            <b>Sidebar</b> - Main left dark blue bar<br />
            <b>Main</b> - Main center section
          </p>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div class="app">
                  <header></header>
                  <div class="container">
                    <aside></aside>
                    <main></main>
                  </div>
                </div>
              </script>
            </code>
          </pre>
        </section>

        <section>
          <header><h2>Variables</h2></header>
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
        </section>

        <section>
          <header><h2>Logo and Website Name</h2></header>
          <p>
            Your going to need to add a link to main app with the company logo.
            Place this tag in your header
          </p>
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div class="website">
                  <a class="logo" href="#"><img src="images/logo-white.svg" /></a>
                  <div class="name">Style Guide App</div>
                </div>
              </script>
            </code>
          </pre>
        </section>

        <section>
          <header><h2>User Info</h2></header>
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
                    <ul>
                      <li class="menu-item">User Account</li>
                      <li class="menu-item">Logout</li>
                    </ul>
                  </div>
                </div>
              </script>
            </code>
          </pre>
        </section>
      </div>
    </div>
  </article>
</template>
