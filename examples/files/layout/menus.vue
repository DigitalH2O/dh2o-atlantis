<script>
import $ from 'jquery';
import 'select2';                       // globally assign select2 fn to $ element

export default {
  mounted() {
    $('.select2-nosearch').select2({
      width: '300px',
      minimumResultsForSearch: Infinity
    });

    $('.select2-search').select2({
      width: '300px'
    });
  }
}
</script>

<style>
  @import '~dh2o-atlantis/scss/_partials';

  h3 {
    margin-bottom: $spacing-half;
  }

  ul.dh2o-dropdown-menu {
    height: 100px;
  }

  .example {
    margin-bottom: $spacing;
  }

</style>

<template>
  <section id="content-menus" class="section">
      <div class="title"><h1>Menus</h1></div>
      <div class="content">
        <p>
          The styles for a dropdown menu can be applied to any <code class="language-html">ul</code> tag
          with the <code class="language-css">dh2o-dropdown-menu</code> class. They're also automatically
          applied to all Select2 dropdowns.
        </p>

      <h3>Generic Dropdown Menus</h3>

      <p>Note the use of <code class="language-html">aria-selected</code> to mark the selected element.</p>
      <div class="example">
        <code-sample>
          <ul class="dh2o-dropdown-menu">
            <li>Option 1</li>
            <li aria-selected="true">Option 2 (selected)</li>
            <li>Option 3</li>
            <li>Option 4</li>
            <li>Option 5</li>
          </ul>
        </code-sample>
      </div>


      <h3>Select2</h3>

      <h3>A Select2 control without a search box</h3>
      <div class="example">
        <select class="select2-nosearch">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
      </div>


      <h3>A Select2 control with a search box</h3>

      <div class="example">
        <select class="select2-search">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
          <option>Option 4</option>
          <option>Option 5</option>
        </select>
      </div>

    </div>
  </section>
</template>
