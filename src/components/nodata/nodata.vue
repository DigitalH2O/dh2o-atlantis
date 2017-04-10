<script>
  export default {
    props: {
      subtext: {
        type: String,
        default: function () {
          return 'Please update search'
        }
      }
    }
  }
</script>

<template>
  <div class="nodata">
    <div class="nodata-container">
      <div class="nodata-icon"><i aria-hidden="true" class="fa fa-exclamation-circle"></i></div>
      <div class="nodata-text">No Data Available</div>
      <div class="nodata-subtext">{{subtext}}</div>
    </div>
  </div>
</template>
