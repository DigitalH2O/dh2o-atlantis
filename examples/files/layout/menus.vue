<script>
import $ from 'jquery';
import 'select2';                       // globally assign select2 fn to $ element
import 'select2/dist/css/select2.css';  // optional if you have css loader

export default {
  mounted() {
    $('.select2-thing').select2({
      width: '300px'
    });
  }
}
</script>

<style>

  ul.dropdown-menu {
    height: 100px;
  }

/*   .select2-thing {
    width: 300px;
  } */


</style>

<template>
  <section id="content-menus" class="section">
    <div class="title"><h1>Menus</h1></div>
    <div class="content">
      <code-sample>
        <ul class="dh2o-dropdown-menu">
          <li>Option 1</li>
          <li aria-selected="true">Option 2 (selected)</li>
          <li>Option 3</li>
          <li>Option 4</li>
          <li>Option 5</li>
        </ul>
      </code-sample>

      <select class="select2-thing">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option>
        <option>Option 5</option>
      </select>
    </div>
  </section>
</template>
