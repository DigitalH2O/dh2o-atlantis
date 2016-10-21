<template>
  <div id="content-dropdowns" class="section">
  <div class="title"><h1>Dropdowns</h1></div>
    <div class="content">
      <p>
        The dropdown menu styles are applied through 2 main classes: "dh2o-dropdown-trigger" and "dh2o-dropdown-content". The trigger class needs to be applied to the parent element of the content class. This is because the dropdown content is positioned relative to the position of the button.
      </p>
      <p>
        For the items in the dropdown menu, apply the "menu-item" class to get the hover states and borders as shown below.
      </p>
      <div class="dh2o-dropdown-trigger btn">
        User Menu
        <div class="dh2o-dropdown-content">
          <ul>
            <li class="menu-item">User Account</li>
            <li class="menu-item">Logout</li>
          </ul>
        </div>
      </div>
      <pre>
        <code class="language-markup">
          <script type="prism-html-markup">
            <div class="dh2o-dropdown-trigger btn">
              User Menu
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

      <div class="message alert">
        Do not use button element for dropdowns.
        Firefox does not like it.
      </div>

    </div>
  </div>
</template>
