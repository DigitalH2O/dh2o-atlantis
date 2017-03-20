<script>
  import DashboardBuilder from 'dh2o-atlantis/components/dashboards/dashboards.js'
  import dashboardWidget from './dashboards-widget.vue'

  export default {
    data () {
      return {
        rows: [[], [], [], [], [{type: 'rig'}], [{type: 'rig'}], [], [], []]
      }
    },
    components: {
      widget: dashboardWidget
    },
    mounted () {
      /* eslint-disable no-new */
      new DashboardBuilder({
        data: this.rows,
        draggables: '.draggables .draggable, .dashboard-widget',
        main: '.dashboard-main',
        newWidget: (info) => {
          return {
            id: Math.floor(Math.random() * 100000000),
            type: info.type
          }
        }
      })
    }
  }
</script>

<style lang="scss">
  #content-dashboards {
    .draggables {
      .draggable { cursor: move; }
    }
  }
</style>

<template>
  <article id="content-dashboards">
    <header><h1>Dashboards</h1></header>
    <div class="draggables bar secondary">
      <div class="draggable btn primary" data-type="rig">Drag Rig</div>
      <div class="draggable btn primary" data-type="fire">Drag Fire</div>
      <div class="draggable btn primary" data-type="operator">Drag Operator</div>
    </div>
    <div class="content">
      <div class="dashboard-main">
        <div class="dashboard-dropzone" v-for="(row, index) in rows" :data-index="index">
          <widget v-for="widget in row" :data-id="widget.id" :type="widget.type" />
        </div>
      </div>
    </div>
  </article>
</template>
