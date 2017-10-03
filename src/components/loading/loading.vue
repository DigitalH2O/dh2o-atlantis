<script>
  export default {
    props: {
      showText: { default: true }
    }
  }
</script>

<template>
  <div class="loading">
    <div class="loading-container">
      <img src="~dh2o-atlantis/images/loading.svg" />
      <div v-if="showText" class="loading-text">Loading...</div>
    </div>
  </div>
</template>
