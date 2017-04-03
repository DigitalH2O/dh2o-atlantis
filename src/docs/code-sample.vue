<script>
  import jsBeautify from 'js-beautify'

  /* globals Prism */

  export default {
    data () {
      return {
        code: ''
      }
    },
    methods: {
      refreshCodePreview () {
        let markupInDOM = this.$el.querySelector('.as-rendered').innerHTML

        if (this.lastSeenMarkup === markupInDOM) {
          return
        }

        this.lastSeenMarkup = markupInDOM
        // take out the data attributes that Vue uses for scoped CSS
        markupInDOM = markupInDOM.replace(/data-v.*?=""\s*/g, '')

        // replace the dev server's image paths with something more sane
        markupInDOM = markupInDOM.replace(
          /src="http:\/\/.*\/(.*\.svg)\?.*?"/g,
          (match, p1, p2) => `src="images/${p1}"`)

        // and run the markup through the beautifier to make it more readable:
        markupInDOM = jsBeautify.html(markupInDOM, { indent_size: 2 })

        // re-render the Prism code preview, in case the markup in .content has
        // changed
        this.$el.querySelector('.as-code code').innerHTML = Prism.highlight(
          markupInDOM,
          Prism.languages.markup)
      }
    },
    mounted () {
      this.refreshCodePreview()
    },
    updated () {
      this.refreshCodePreview()
    }
  }
</script>

<style scoped lang="scss">
  @import "~dh2o-atlantis-partials";
  .code-sample {
    display: flex;
    align-items: center;

    .as-rendered {
      flex: 0 1 auto;
      margin-right: $spacing-half;
    }

    .as-code {
      flex: 1 0 50%;
      overflow-x: auto;
    }
  }
</style>

<template>
  <div class="code-sample">
    <div class="as-rendered">
      <slot />
    </div>

    <div class="as-code">
      <pre class="language-html-markup">
        <code class="language-html-markup"></code>
      </pre>
    </div>
  </div>
</template>
