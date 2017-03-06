<script>
  import dh2oModal from 'dh2o-atlantis/components/modals/modals.js'

  export default {
    data () {
      return {
        isModalJsShowing: false
      }
    },
    methods: {
      applyModal () {
        var text = '<h1>Great job on clicking a button. What?!?! Do you want a medal or something?</h1>'
        document.querySelector('#modal2 .modal-body').innerHTML = text
        setTimeout(() => {
          dh2oModal('modal2').hide()
        }, 1000)
      },
      showModalJs () {
        dh2oModal('modalJs', true, (isShowing) => {
          this.isModalJsShowing = isShowing
        })
      }
    }
  }
</script>

<style lang="scss">
  @import '~dh2o-atlantis/scss/_partials.scss';

  #content-modals {
    .code-sample {
      .as-rendered, .as-code {
        display: block;
        width: 100%;
      }
    }
  }

  #modal5 {
    .info {
      display: flex;
      flex-direction: row;
      .left {
        background-color: $background-color;
        flex: 0 1 100px;
      }
      .right {
        padding: 0 0 0 10px;
        flex: 1 1 auto;
      }
    }
    .bottom {
      padding-top: 10px;

      .btn {
        margin-bottom: $spacing-quarter;
      }
    }
  }
</style>

<template>
  <section id="content-modals">
    <div class="title"><h1>Modals</h1></div>
    <div class="content">
      <p>
        Modal consists of a button with the class dh2o-modal-btn and a
        data attribute of data-dh2o-modal with the value of the modal id.
      </p>
      <p>
        The modal consists of a div with the class of dh2o-modal and must at
        least have the child of modal-content and inside that modal-body.
        Header and footer are optional.
      </p>
      <p>
        To Close the modal just add an element with the class <strong>modal-close</strong>
      </p>
      <p>
        Modals have onkey press function so if use hits esc button it will close last modal in the dom.
      </p>
      <p>
        If you would like to have a modal element triggered a click by hitting enter add the class modal-enter
      </p>

      <code-sample>
        <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal1">
          Simple Text Modal
        </div>

        <div id="modal1" class="dh2o-modal">
          <div class="modal-content" style="width: 300px;">
            <div class="modal-body">Hey buddy!</div>
          </div>
        </div>
      </code-sample>

      <code-sample>
        <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal2">
          Full Modal
        </div>

        <div id="modal2" class="dh2o-modal">
          <div class="modal-content" style="width: 500px;">
            <div class="modal-header">
              Title
              <div class="modal-header-right"><i class="fa fa-close modal-close"></i></div>
            </div>
            <div class="modal-body">
              <p>Here is some text</p>
              <p>Here is some more text</p>
              <p>Here is some more more text</p>
            </div>
            <div class="modal-footer">
              <div class="btn primary modal-enter" v-on:click="applyModal()">Apply</div>
              <div class="btn modal-close">Cancel</div>
            </div>
          </div>
        </div>
      </code-sample>

      <code-sample>
        <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal3">
          Modal Over Modal
        </div>

        <div id="modal3" class="dh2o-modal">
          <div class="modal-content">
            <div class="modal-body">
              <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal4">
                Modal Over Modal
              </div>
            </div>
          </div>
        </div>
        <div id="modal4" class="dh2o-modal">
          <div class="modal-content">
            <div class="modal-body">
              <p>Here is some text</p>
              <p>Here is some more text</p>
              <p>Here is some more more text</p>
            </div>
          </div>
        </div>
      </code-sample>

      <code-sample>
        <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal5">
          Advanced Modal
        </div>

        <div id="modal5" class="dh2o-modal">
          <div class="modal-content" style="width: 500px;">
            <div class="modal-header">
              Advanced Modal
              <div class="modal-header-right">
                <div class="btn primary">Apply</div>
                <div class="btn modal-close">Cancel</div>
              </div>
            </div>
            <div class="modal-body">
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
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
                <div class="btn">btn</div>
              </div>
            </div>
          </div>
        </div>
      </code-sample>

      <div class="separator"></div>

      <h3>Javascript</h3>
      <p>
        You most likely will need to programmably call to the modal.
        Just use the global dh2oModal() function.
      </p>
      <div class="btn secondary" @click="showModalJs">
        Click Me!
      </div>
      Is Modal Showing? {{isModalJsShowing}}

      <div id="modalJs" class="dh2o-modal">
        <div class="modal-content" style="width: 300px;">
          <div class="modal-body">Hey buddy!</div>
        </div>
      </div>
      <pre>
        <code class="language-js">
          let modal = dh2oModal('modalId')
          modal.show()
          // or
          modal.hide()
        </code>
      </pre>

    </div>
  </section>
</template>
