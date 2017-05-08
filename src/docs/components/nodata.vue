<script>
  import nodata from 'dh2o-atlantis/components/nodata/nodata.vue'
  export default {
    data () {
      return {
        showNoData: false
      }
    },
    components: {
      nodata
    },
    computed: {
      nodataComponent () {
        return `<nodata v-if="showNoData" />`
      },
      nodataPropsComponent () {
        return `<nodata v-if="showNoData" subtext="Alternate subtext" />`
      }
    }
  }
</script>

<template>
  <article id="content-grid">
    <header><h1>No Data</h1></header>
    <div class="stage">

      <div class="widget body">
        <p>
          Place component within the container to which you would like to apply the no data overlay.
          The parents css position must be set to relative in order for this component to fill properly.
        </p>
        <pre class="language-html-markup">
          <code class="language-html-markup">
            {{nodataComponent}}
          </code>
        </pre>

        <p>
          You may need have alternative subtext describing what is needed in order to see data.
          In order to do so pass subtext.
        </p>
        <pre class="language-html-markup">
          <code class="language-html-markup">
            {{nodataPropsComponent}}
          </code>
        </pre>
      </div>

      <div class="widget body">
        <div class="btn primary" @click="showNoData = !showNoData">Click To {{(showNoData ? 'Hide No Data': 'Show No Data')}}</div>
      </div>

      <div class="widget">
        <nodata v-if="showNoData" subtext="Please update search parameters" />
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

      <div class="widget">
        <header>
          <div class="titlebar">
            <div class="title">Just Body</div>
            <div class="subtitle">Not the header</div>
          </div>
          <div class="toolbar">
            <div class="dh2o-dropdown-container trigger">
              <div class="dh2o-dropdown-trigger"><i aria-hidden="true" class="fa fa-bars"></i></div>
              <div class="dh2o-dropdown-content">
                <ul class="menu">
                  <li>Menu item</li>
                  <li>Menu item 2</li>
                  <li>Menu item 3</li>
                  <li>Menu item 4</li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div class="body">
          <nodata v-if="showNoData" subtext="Please update search parameters" />
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

    </div>

  </article>
</template>
