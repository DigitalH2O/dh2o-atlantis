<script>
  import Modal from 'dh2o-atlantis/components/modals/modals.ts'

  export default {
    mounted () {
      // note that you can create modals without an ID if you use a direct
      // reference to the DOM element:
      this.modalLock = new Modal({
        el: this.$refs.modalLock,
        isLocked: true,
        callback: (info) => {
          this.isModalLockLocked = info.isLocked
        }
      })
    },

    data () {
      return {
        isModalJsShowing: false,
        isModalLockLocked: false,
        modalLock: null
      }
    },

    methods: {
      applyModal () {
        var text = '<h1>Great job on clicking a button. What?!?!<br />Do you want a medal or something?</h1>'
        document.querySelector('#modal2 .widget .body').innerHTML = text
        setTimeout(() => {
          new Modal({
            el: document.getElementById('modal2')
          }).hide()
        }, 2000)
      },
      showModalJs () {
        new Modal({
          el: document.getElementById('modalJs'),
          callback: (info) => {
            this.isModalJsShowing = info.isOpen
          }
        }).show()
      },

      showModalLock () {
        this.modalLock.show()
      },

      lock() {
        this.modalLock.lock()
      },

      unlock () {
        this.modalLock.unlock()
      }
    }
  }
</script>

<style lang="scss">
  @import '~dh2o-atlantis/scss/_partials.scss';

  #content-modals {
    .code-sample {
      .as-rendered {
        display: block;
        width: 25%;
      }
      .as-code {
        display: block;
        width: 75%;
      }
    }

    #modalWidget {
      .widget {
        width: 400px;
      }
    }

    #modal5 {
      .info {
        display: flex;
        flex-direction: row;
        .left {
          background-color: $background-color;
          flex: 0 1 100px;
          padding: $spacing-quarter;
        }
        .right {
          padding: 0 0 0 10px;
          flex: 1 1 auto;
        }
      }
      .bottom {
        padding-top: 10px;
      }
    }
  }
</style>

<template>
  <div id="content-modals">
    <div class="bar"><h1>Modals</h1></div>
    <div class="bar">
      <p>
        Modal consists of a button with the class <code class="language-css">dh2o-modal-btn</code> and a
        data attribute of <code class="language-css">data-dh2o-modal</code> with the value of the modal id.
      </p>
      <p>
        The modal consists of a div with the class of <code class="language-css">dh2o-modal</code> and must at
        least have the child of <code class="language-css">widget</code> and inside that <code class="language-css">dh2o-modal</code>.
        Header and footer are optional.
      </p>
      <p>
        To Close the modal just add an element with the class <code class="language-css">modal-close</code>
      </p>
    </div>
    <div class="stage">

      <div class="widget body">
        <code-sample>
          <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal1">
            Simple Text Modal
          </div>

          <div id="modal1" class="dh2o-modal">
            <div class="widget body">Im a modal</div>
          </div>
        </code-sample>
      </div>

      <div class="widget">
        <header><h2>Widget Modal</h2></header>
        <div class="body">
          <p>
            You may want to display a widget as a modal. Just add your widget into the modal-content section.
          </p>

          <code-sample>
            <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modalWidget">
              Widget Modal
            </div>

            <div id="modalWidget" class="dh2o-modal">
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
                  This is the widget body<br />
                  This is the widget body<br />
                  This is the widget body<br />
                  This is the widget body<br />
                  This is the widget body<br />
                  This is the widget body<br />
                  This is the widget body
                </div>
              </div>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Full Modal</h2></header>
        <div class="body">
          <p>All the bells and whistles</p>
          <code-sample>
            <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal2">
              Full Modal
            </div>

            <div id="modal2" class="dh2o-modal">
              <div class="widget">
                <header>
                  <div class="titlebar">
                    <div class="title">Modal Widget</div>
                  </div>
                </header>
                <div class="body">
                  <p>Here is some text</p>
                  <p>Here is some more text</p>
                  <p>Here is some more more text</p>
                </div>
                <footer>
                  <div class="btn primary modal-enter" v-on:click="applyModal()">Apply</div>
                  <div class="btn modal-close">Cancel</div>
                </footer>
              </div>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Double Modal</h2></header>
        <div class="body">
          <p>Show usage of modal over another modal</p>
          <code-sample>
            <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal3">
              Modal Over Modal
            </div>

            <div id="modal3" class="dh2o-modal">
              <div class="widget body">
                <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal4">
                  Modal Over Modal
                </div>
              </div>
            </div>
            <div id="modal4" class="dh2o-modal">
              <div class="widget body">
                <p>Here is some text</p>
                <p>Here is some more text</p>
                <p>Here is some more more text</p>
              </div>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Advanced Modal</h2></header>
        <div class="body">
          <p>All the bells and whistles</p>
          <code-sample>
            <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal5">
              Advanced Modal
            </div>

            <div id="modal5" class="dh2o-modal">
              <div class="widget">
                <header>
                  <div class="title">
                    Advanced Modal
                  </div>
                </header>
                <div class="body">
                  <div class="info">
                    <div class="left">
                      <ul class="ordered-list">
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                        <li>Item</li>
                      </ul>
                    </div>
                    <div class="right">
                      <p>Here is some text</p>
                      <p>Here is some more text</p>
                      <p>Here is some more more text</p>
                    </div>
                  </div>
                  <div class="bottom">
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                    <div class="btn">tag</div>
                  </div>
                </div>
                <footer>
                  <div class="btn primary">Apply</div>
                  <div class="btn modal-close">Cancel</div>
                </footer>
              </div>
            </div>
          </code-sample>
        </div>
      </div>

      <div class="widget">
        <header><h2>Javascript</h2></header>
        <div class="body">
          <p>Show to usage with javascript</p>
          <p>
            You most likely will need to programmably call to the modal.
            Just use the <code class="language-js">new Modal()</code> class.
          </p>
          <div class="btn secondary" @click="showModalJs">
            Click Me!
          </div>
          Is Modal Showing? {{isModalJsShowing}}

          <div id="modalJs" class="dh2o-modal">
            <div class="widget body">Hey buddy!</div>
          </div>
          <pre>
            <code class="language-js">
              let modal = new Modal({
                el: document.getElementById('modalId'),
                isLocked: false,  // Optional
                callback: (info) => {console.log(info)} // Optional
              })

              modal.show()
              // or
              modal.hide()
            </code>
          </pre>
        </div>
      </div>

      <div class="widget">
        <header><h2>Locking</h2></header>
        <div class="body">
          <p>Use <code class="language-js">modal.lock()</code> and <code class="language-js">modal.unlock()</code>
          to prevent a user from closing the modal.</p>

          <p>Note that this <strong>also</strong> prevents you from closing the modal manually with <code class="language-js">modal.hide()</code>.
          If you lock the modal, you must call <code class="language-js">modal.unlock()</code> before hiding it.

          <div class="btn secondary" @click="showModalLock">
            Click me to open a locked modal!
          </div>

          <div ref="modalLock" class="dh2o-modal">
            <div class="widget body">
              <p>You have to unlock the modal before you can close it</p>
              <p>The modal <strong>{{ isModalLockLocked ? 'is' : 'is not'}}</strong> currently locked.</p>
              <button class="btn primary" @click="lock">Lock</button>
              <button class="btn primary" @click="unlock">Unlock</button>
            </div>
          </div>
          <pre>
            <code class="language-js">
              let modal = new Modal({
                el: document.getElementById('modalId')
              })

              modal.lock()
              // the modal is now unclosable

              modal.unlock()
              // the modal can now be closed
            </code>
          </pre>
        </div>
      </div>

    </div>
  </div>
</template>
