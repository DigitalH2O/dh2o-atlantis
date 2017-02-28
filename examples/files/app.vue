<template>
  <div class="app">
    <div class="header">
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
    </div>
    <div class="container">
      <div class="sidebar">
        <ul class="nav">
          <li class="link">
            <router-link to="/welcome">
              <i style="font-size: 30px;" class="fa fa-home" aria-hidden="true"></i><br />
              Home
            </router-link>
          </li>
          <li class="separator"></li>
          <li class="link"><router-link to="/layout">Layout</router-link></li>
          <li class="link"><router-link to="/sidebar">Sidebar</router-link></li>
          <li class="link"><router-link to="/menus">Menus</router-link></li>
          <li class="link"><router-link to="/sections">Sections</router-link></li>
          <li class="link"><router-link to="/flexboxgrid">Grid</router-link></li>
          <li class="separator"></li>
          <li class="link"><router-link to="/colors">Colors</router-link></li>
          <li class="link"><router-link to="/fonts">Fonts</router-link></li>
          <li class="link"><router-link to="/images">Images</router-link></li>
          <li class="link"><router-link to="/misc">Misc</router-link></li>
          <li class="separator"></li>
          <li class="link"><router-link to="/inputs">Inputs</router-link></li>
          <li class="link"><router-link to="/buttons">Buttons</router-link></li>
          <li class="link"><router-link to="/tags">Tags</router-link></li>
          <li class="link"><router-link to="/groups">Groups</router-link></li>
          <li class="link"><router-link to="/messages">Messages</router-link></li>
          <li class="link"><router-link to="/lists">Lists</router-link></li>
          <li class="link"><router-link to="/tables">Tables</router-link></li>
          <li class="separator"></li>
          <li class="link"><router-link to="/dropdowns">Dropdowns</router-link></li>
          <li class="link"><router-link to="/modals">Modals</router-link></li>
        </ul>
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
