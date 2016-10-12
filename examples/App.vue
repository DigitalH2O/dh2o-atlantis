<template>
  <div class="app-container">
    <div class="header">
      <a class="logo dh2o-logo-white" href="#">
      </a>
      <div class="website-name">Style Guide App</div>
    </div>
    <div class="sidebar">
      <ul class="nav">
        <li class="link">
          <router-link to="/">
            <i style="font-size: 30px;" class="fa fa-home" aria-hidden="true"></i><br />
            Home
          </router-link>
        </li>
        <li class="seperator"></li>
        <li class="link"><router-link to="/layout">Layout</router-link></li>
        <li class="link"><router-link to="/menu">Menu</router-link></li>
        <li class="link"><router-link to="/sections">Sections</router-link></li>
        <li class="link"><router-link to="/grid">Grid</router-link></li>
        <li class="seperator"></li>
        <li class="link"><router-link to="/colors">Colors</router-link></li>
        <li class="link"><router-link to="/fonts">Fonts</router-link></li>
        <li class="link"><router-link to="/inputs">Inputs</router-link></li>
        <li class="link"><router-link to="/buttons">Buttons</router-link></li>
        <li class="link"><router-link to="/messages">Messages</router-link></li>
        <li class="link"><router-link to="/lists">Lists</router-link></li>
        <li class="link"><router-link to="/tables">Tables</router-link></li>
        <li class="link"><router-link to="/images">Images</router-link></li>
        <li class="link"><router-link to="/misc">Misc</router-link></li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {};

</script>

<style>
</style>
