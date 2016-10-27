<template>
  <div class="app-container">
    <div class="header">
      <router-link to="/welcome" class="logo"></router-link>
      <div class="website-name">Style Guide App</div>
    </div>
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
        <li class="link"><router-link to="/menu">Menu</router-link></li>
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
</template>
