<template>
  <div id="content-layout" class="section">
    <div class="title"><h1>Layout</h1></div>
    <div class="content">
      <p>The main application primarily consists of three elements wrapped in
        a div with the class of "app" for the application to mount to.</p>
      <p>
        <b>Header</b> - Main blue top bar<br />
        <b>Sidebar</b> - Main left dark blue bar<br />
        <b>Main</b> - Main center section
      </p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <div class="header"></div>
            <div class="sidebar"></div>
            <div class="main"></div>
          </script>
        </code>
      </pre>

      <div class="separator"></div>

      <h3>Variables</h3>
      <p>
        There are two variables that define the height of the header and
        the width of sidebar. These can be used for adjusting values when
        pulling importing the scss into your application. Main container
        body will adjust automatically.
      </p>
      <pre>
        <code class="language-scss">
          $header-height: 58px; // Height of main header
          $sidebar-width: 100px; // Width of main sidebar
        </code>
      </pre>

      <div class="separator"></div>

      <h3>Logo</h3>
      <p>
        Your going to need to add a link to main app with the company logo.
        Place this tag in your header
      </p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <a class="logo" href="#"><img src="images/logo-white.svg" /></a>
          </script>
        </code>
      </pre>

      <div class="separator"></div>

      <h3>Website Name</h3>
      <p>To place the website add the below code in the header after the logo.</p>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <div class="website-name">Style Guide App</div>
          </script>
        </code>
      </pre>
    </div>
  </div>
</template>
