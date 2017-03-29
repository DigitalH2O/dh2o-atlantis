<script>
  import loading from 'dh2o-atlantis/components/loading/loading.vue'
  export default {
    data () {
      return {
        showLoading: false
      }
    },
    components: {
      loading
    },
    computed: {
      loadingComponent () {
        return `<loading v-if="showLoading" />`
      }
    }
  }
</script>

<template>
  <article id="content-grid">
    <header><h1>Loading</h1></header>
    <div class="widget">
      <div class="body">
        <p>
          The usability for loading needed to be a simplistic approach that was reusable. This loading component
          will need to be loaded inside the div of the location in which you would want to overlay loading.
        </p>

        <pre class="language-html-markup">
          <code class="language-html-markup">
            {{loadingComponent}}
          </code>
        </pre>

      </div>
    </div>
    <div class="widget">
      <div class="body">
        <div class="btn primary" @click="showLoading = !showLoading">Click To {{(showLoading ? 'Hide Loading': 'Show Loading')}}</div>
      </div>
    </div>
    <div class="widget">
      <loading v-if="showLoading" />
      <div class="body">
        <p>
          Lorem ipsum dolor sit amet, nam erant dolorum urbanitas ad, elitr doming veritus eu sed, laoreet adipisci cu eam. Nemore utamur at nec, sit elit copiosae conclusionemque no, vix ut diam similique signiferumque. Primis mandamus expetenda mea at, in recusabo repudiare est. Dictas postulant ne eam, omnis verterem insolens nam an, vis ut modus delenit verterem.
        </p>
        <p>
          Sea at omnis similique ullamcorper, ei sea elitr principes, ne pro cibo lucilius maiestatis. Fierent reformidans ei has, vix albucius torquatos eu. Nostrum honestatis definitiones quo ei, et solum vulputate vim. Ei usu audiam offendit. Et eam dicit fuisset noluisse, impetus minimum duo ut, ut decore putant qui. Ad wisi congue ceteros usu, mei doming omnesque nominavi an.
        </p>
        <p>
          Vim assum quodsi voluptua ea, sea habeo nobis praesent et, in malis tempor ancillae nec. Ea impedit singulis suavitate eum. Omnis causae repudiare quo an, cum etiam moderatius ex. Quod etiam corrumpit ex has. Ut sed menandri deserunt, te est nemore instructior, ut maiestatis democritum sed. Alii habeo lobortis ex pri, ignota scripserit mel ad, meis prompta qui ne.
        </p>
      </div>
    </div>
  </article>
</template>
