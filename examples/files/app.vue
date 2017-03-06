<template>
  <div class="app">
    <header>
      <router-link to="/welcome" class="logo"></router-link>
      <div class="website-name">Style Guide App</div>
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
    </header>
    <div class="container">
      <aside>
        <nav>
          <router-link to="/welcome" class="link">
            <i style="font-size: 30px;" class="fa fa-home" aria-hidden="true"></i><br />
            Home
          </router-link>
          <div class="separator"></div>
          <router-link class="link" to="/layout">Layout</router-link>
          <router-link class="link" to="/sidebar">Sidebar</router-link>
          <router-link class="link" to="/menus">Menus</router-link>
          <router-link class="link" to="/sections">Sections</router-link>
          <router-link class="link" to="/flexboxgrid">Grid</router-link>
          <div class="separator"></div>
          <router-link class="link" to="/colors">Colors</router-link>
          <router-link class="link" to="/fonts">Fonts</router-link>
          <router-link class="link" to="/images">Images</router-link>
          <router-link class="link" to="/misc">Misc</router-link>
          <div class="separator"></div>
          <router-link class="link" to="/inputs">Inputs</router-link>
          <router-link class="link" to="/buttons">Buttons</router-link>
          <router-link class="link" to="/tags">Tags</router-link>
          <router-link class="link" to="/groups">Groups</router-link>
          <router-link class="link" to="/messages">Messages</router-link>
          <router-link class="link" to="/lists">Lists</router-link>
          <router-link class="link" to="/tables">Tables</router-link>
          <div class="separator"></div>
          <router-link class="link" to="/dropdowns">Dropdowns</router-link>
          <router-link class="link" to="/modals">Modals</router-link>
        </nav>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
