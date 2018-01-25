<script>
  import Drawer from 'dh2o-atlantis/components/drawer/drawer.ts'
  export default {
    data () {
      return {
        topPanel: null,
        rightPanel: null,
        bottomPanel: null,
        leftPanel: null
      }
    },
    mounted () {
      this.leftPanel = new Drawer({
        el: this.$refs.leftPanel,
        location: 'left',
        width: '150px',
        beforeShow: () => {console.log('beforeShow')},
        afterShow: () => {console.log('afterShow')},
        beforeHide: () => {console.log('beforeHide')},
        afterHide: () => {console.log('afterHide')}
      })

      this.rightPanel = new Drawer({
        el: this.$refs.rightPanel,
        location: 'right',
        width: '200px'
      })

      this.topPanel = new Drawer({
        el: this.$refs.topPanel,
        overlay: true,
        location: 'top',
        height: '80px'
      })

      this.bottomPanel = new Drawer({
        el: this.$refs.bottomPanel,
        location: 'bottom',
        height: '100px'
      })
    },
    methods: {
      toggleLeftPanel () {
        this.leftPanel.toggle()
      },
      toggleRightPanel () {
        this.rightPanel.toggle()
      },
      toggleTopPanel () {
        this.topPanel.toggle()
      },
      toggleBottomPanel () {
        this.bottomPanel.toggle()
      }
    }
  }
</script>

<style lang="scss">
  @import '~dh2o-atlantis/scss/_partials.scss';

  .drawer-content {
    display: flex;
    flex-direction: column;
    position: relative;

    .panel-padding {
      padding: $spacing;
    }

    .top-panel {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: 24px;
    }

    .content {
      display: flex;
      flex-direction: row;
      height: 100%;

      .left-panel {
        display: flex;
        flex-direction: row;

        .knob {
          background-color: $white;
          padding: $spacing-quarter;
          border-right: solid 1px $border-color;

          .btn {
            cursor: pointer;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            padding: $spacing $spacing-quarter $spacing $spacing-quarter;
          }
        }
      }
    }

  }
</style>

<template>
  <div class="drawer-content">
    <div ref="topPanel" class="top-panel panel-padding hide">Hello!!!!</div>
    <div class="bar"><h1>Drawer</h1></div>
    <div class="content">
      <div class="left-panel">
        <div ref="leftPanel" class="left-panel-content panel-padding hide">
          <h5>Title</h5>
          <div style="padding-left: 10px;">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
          </div>
          <h5>Title</h5>
          <div style="padding-left: 10px;">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
          </div>
          <h5>Title</h5>
          <div style="padding-left: 10px;">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
          </div>
          <h5>Title</h5>
          <div style="padding-left: 10px;">
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            <div>Item 5</div>
          </div>
        </div>
        <div class="knob">
          <div class="btn primary" @click="toggleLeftPanel">Toggle Left Panel</div>
        </div>
      </div>
      <div class="stage">

        <div class="widget body">
          <div class="btn primary" @click="toggleRightPanel">Toggle Right Panel</div>
          <div class="btn primary" @click="toggleTopPanel">Toggle Top Panel Overlay</div>
          <div class="btn primary" @click="toggleBottomPanel">Toggle Bottom Panel</div>
        </div>

        <div class="widget body">
          <pre>
            <code class="language-markup">
              <script type="prism-html-markup">
                <div ref="drawer" class="hide">
                  Content Here
                </div>
              </script>
            </code>
          </pre>
          <pre>
            <code class="language-javascript">
              <script type="prism-javascript">
                let drawer = new Drawer({
                  // Required
                  el: this.$refs.drawer,
                  location: 'left', // options: 'top' 'right' 'bottom' 'left'
                  width: '150px', // required for left and right positions
                  height: '150px', // required for top and bottom positions

                  // Optionals
                  overlay: true, // Used to set position type for overlay purposes
                  beforeShow: () => {console.log('beforeShow')},
                  afterShow: () => {console.log('afterShow')},
                  beforeHide: () => {console.log('beforeHide')},
                  afterHide: () => {console.log('afterHide')}
                })

                drawer.show()
                drawer.hide()
              </script>
            </code>
          </pre>
        </div>
      </div>
      <div ref="rightPanel" class="panel-padding hide">
        <h5>Title</h5>
        <div style="padding-left: 10px;">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>
        <h5>Title</h5>
        <div style="padding-left: 10px;">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>
        <h5>Title</h5>
        <div style="padding-left: 10px;">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>
        <h5>Title</h5>
        <div style="padding-left: 10px;">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
          <div>Item 5</div>
        </div>
      </div>
    </div>
    <div ref="bottomPanel" class="hide panel-padding">Bottom Panel Section</div>
  </div>
</template>
