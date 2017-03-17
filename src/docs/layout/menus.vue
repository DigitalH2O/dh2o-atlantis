<script>
  import $ from 'jquery'
  import 'select2' // globally assign select2 fn to $ element

  export default {
    mounted () {
      $('.select2-nosearch').select2({
        width: '300px',
        minimumResultsForSearch: Infinity
      })

      $('.select2-search').select2({
        width: '300px'
      })
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/_partials';

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
  <article id="content-menus">
    <header><h1>Menus</h1></header>
    <div class="widget">

      <section>
        <p>
          The styles for a dropdown menu can be applied to any <code class="language-html">ul</code> tag
          with the <code class="language-css">dh2o-dropdown-menu</code> class. They're also automatically
          applied to all Select2 dropdowns.
        </p>
      </section>

      <section>
        <header><h2>Generic Dropdown Menus</h2></header>
        <p>Note the use of <code class="language-html">aria-selected</code> to mark the selected element.</p>
        <div class="example">
          <code-sample>
            <ul class="dh2o-dropdown-menu">
              <li>Option 1</li>
              <li aria-selected="true">Option 2 (selected)</li>
              <li>Option 3</li>
              <li aria-disabled="true">Option 4 (disabled)</li>
              <li>Option 5</li>
            </ul>
          </code-sample>
        </div>
      </section>

      <section>
        <header><h2>Select2</h2></header>

        <h4>A Select2 control without a search box</h4>
        <div class="example">
          <select class="select2-nosearch">
            <option>Option 1</option>
            <option disabled="true">Option 2 (disabled)</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>

        <h4>A Select2 control with a search box</h4>
        <div class="example">
          <select class="select2-search">
            <option>Option 1</option>
            <option disabled="true">Option 2 (disabled)</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>
      </section>

    </div>
  </article>
</template>
