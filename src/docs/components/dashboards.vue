<script>
  import DashboardBuilder from 'dh2o-atlantis/components/dashboards/dashboards.js'
  import dashboardWidget from './dashboards-widget.vue'

  export default {
    data () {
      return {
        rows: [[{type: 'fire'}, {type: 'fire'}, {type: 'fire'}], [], [], [], [{type: 'operator'}, {type: 'rig'}], [], [], []]
      }
    },
    components: {
      widget: dashboardWidget
    },
    mounted () {
      /* eslint-disable no-new */
      new DashboardBuilder({
        data: this.rows,
        draggables: '.widget-modules .draggable, .dashboard-widget',
        main: '.dashboard-main',
        newWidget: (info) => {
          return {
            type: info.type
          }
        }
      })
    }
  }
</script>

<style lang="scss">
  @import '~dh2o-atlantis/scss/_partials.scss';

  #content-dashboards {
    .widget-modules {
      flex: 0 1 auto;
      padding: $spacing-half;
      background-color: $white;

      .draggable {
        cursor: move;
        display: block;
        margin-bottom: $spacing-quarter;
      }
    }

    .dashboard-main {
      margin: $spacing $spacing $spacing 0;
    }
  }
</style>

<template>
  <article id="content-dashboards">
    <header><h1>Dashboards</h1></header>
    <div class="stage flush row">
      <div class="widget-modules">
        <div class="draggable btn primary" data-type="rig">Drag Rig</div>
        <div class="draggable btn primary" data-type="fire">Drag Fire</div>
        <div class="draggable btn primary" data-type="operator">Drag Operator</div>
      </div>
      <div class="dashboard-main">
        <div class="dashboard-row" v-for="(row, index) in rows" :data-index="index">
          <widget v-for="widget in row" :data-id="widget.id" :type="widget.type" />
        </div>
      </div>
    </div>
  </article>
</template>
