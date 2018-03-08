<script>
  import DashboardBuilder from 'dh2o-atlantis/components/dashboards/index.js'
  import dashboardWidget from './dashboards-widget.vue'

  export default {
    data () {
      return {
        dashboardBuilder: null,
        rows: [[], [], [{type: 'fire'}, {type: 'fire'}, {type: 'fire', isLoading: true}], [], [{type: 'operator', noData: true}, {type: 'rig'}], []]
      }
    },
    components: {
      widget: dashboardWidget
    },
    mounted () {
      /* eslint-disable no-new */
      this.dashboardBuilder = new DashboardBuilder({
        data: this.rows,
        draggables: '.widget-modules .draggable, .dashboard-widget header',
        main: '.dashboard-main',
        newWidget: (info) => {
          return {
            type: info.type
          }
        },
        onChange: (data) => {
          this.updateRows(data)
        }
      })
    },
    methods: {
      updateRows (rows) {
        this.rows = rows
      }
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
  <div id="content-dashboards">
    <div class="bar"><h1>Dashboards</h1></div>
    <div class="stage flush row">
      <div class="widget-modules">
        <div class="draggable btn primary" data-type="rig">Drag Rig</div>
        <div class="draggable btn primary" data-type="fire">Drag Fire</div>
        <div class="draggable btn primary" data-type="operator">Drag Operator</div>
      </div>
      <div class="dashboard-main">
        <div class="dashboard-row" v-for="(row, index) in rows" :key="index" :data-index="index">
          <widget v-for="widget in row" :key="widget.id" :data-id="widget.id" :info="widget" />
        </div>
      </div>
    </div>
  </div>
</template>
