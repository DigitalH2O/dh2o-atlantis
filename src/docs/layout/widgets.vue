<style lang="scss">
  #content-widgets {
    .widget .widget .body { min-width: 300px; min-height: 100px; }
  }
</style>

<template>
  <div id="content-widgets">
    <div class="bar"><h1>Widgets</h1></div>
    <div class="bar">
      A widget is a self contained piece of infomation that primarily consists of a
      header and a body. If no header is needed you may just delare the body next to
      the widget class.
    </div>

    <div class="stage">

      <div class="widget widget-simple">
        <header><h2>Simple</h2></header>
        <div class="body">
          <p>
            Simple widget that doesnt have a header or footer. Due to its simplicity, the widget div only needs class="widget body"
          </p>
          <code-sample>
            <div class="widget body">
              This is a widget.
            </div>
          </code-sample>
        </div>
      </div>
      
      <div class="widget widget-header">
        <header><h2>Header</h2></header>
        <div class="body">
          <p>
            Widget with a simple titlebar. Subtitle is optional
          </p>
          <code-sample>
            <div class="widget">
              <header>
                <div class="titlebar">
                  <span class="title">Widget title</span>
                  <span class="subtitle">Widget subtitle</span>
                </div>
              </header>
              <div class="body">
                This is a widget.
              </div>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Footer</h2></header>
        <div class="body">
          <p>
            Widget with a simple footer. Widget footer is primarily used to establish actions using buttons.
          </p>
          <code-sample>
            <div class="widget">
              <div class="body">
                This is a widget.
              </div>
              <footer>
                <div class="btn primary">Save</div>
                <div class="btn">Cancel</div>
              </footer>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Full</h2></header>
        <div class="body">
          <code-sample>
            <div class="widget">
              <header>
                <div class="titlebar">
                  <span class="title">Widget title</span>
                  <span class="subtitle">Widget subtitle</span>
                </div>
              </header>
              <div class="body">
                This is a widget.
              </div>
              <footer>
                <div class="btn primary">Save</div>
                <div class="btn">Cancel</div>
              </footer>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Toolbar</h2></header>
        <div class="body">
          <p>
            Widgets may also need some sort of toolbar in the upper right hand corner. To accomplish this just add a toolbar div. <br />
            The example below uses the dh2o-dropdown component. You may also add a divider to seperate icons.
          </p>
          <code-sample>
            <div class="widget">
              <header>
                <div class="titlebar">
                  <span class="title">Widget title</span>
                  <span class="subtitle">Widget subtitle</span>
                </div>
                <div class="toolbar">
                  <div class="other-menu"><i class="fa fa-pencil"></i></div>
                  <div class="separator vertical"></div>
                  <div class="dh2o-dropdown-container trigger">
                    <div class="dh2o-dropdown-trigger"><i class="fa fa-bars" aria-hidden="true"></i></div>
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
                This is a widget body. This is a widget body. This is a widget body.<br />
                This is a widget body. This is a widget body. This is a widget body.<br />
                This is a widget body. This is a widget body. This is a widget body.<br />
                This is a widget body. This is a widget body. This is a widget body.<br />
                This is a widget body. This is a widget body. This is a widget body.<br />
                This is a widget body. This is a widget body. This is a widget body.
              </div>
            </div>
          </code-sample>
        </div>
      </div>

    </div>
  </div>
</template>
