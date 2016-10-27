<script>
  module.exports = {
    methods: {
      applyModal1: function() {
        var text = '<h1>Great job on clicking a button. What?!?! Do you want a medal or something?</h1>';
        document.querySelector('#modal1 .modal-body').innerHTML = text;
        setTimeout(function() {
          document.getElementById('modal1').hide();
        }, 1000);
      }
    }
  }
</script>

<template>
  <div id="content-modals" class="section">
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
        To Close the modal just add an element with the class modal-close
      </p>

      <code-sample>
        <div class="btn primary dh2o-modal-btn" data-dh2o-modal="modal1">
          Full Modal
        </div>
        <div class="btn secondary dh2o-modal-btn" data-dh2o-modal="modal2">
          Body-only Modal
        </div>
        <div id="modal1" class="dh2o-modal">
          <div class="modal-content">
            <div class="modal-header">
              Title
              <div class="close model-close"><small>X</small></div>
            </div>
            <div class="modal-body">
              <p>Here is some text</p>
              <p>Here is some more text</p>
              <p>Here is some more more text</p>
            </div>
            <div class="modal-footer">
              <div class="btn primary" v-on:click="applyModal1()">Apply</div>
              <div class="btn model-close">Cancel</div>
            </div>
          </div>
        </div>
        <div id="modal2" class="dh2o-modal">
          <div class="modal-content">
            <div class="modal-body">Just the body</div>
          </div>
        </div>
      </code-sample>

      <div class="separator"></div>

      <h3>Javascript</h3>
      <p>
        You most likely will need to programmably hide the modal.
        To do so just trigger the hide function on the modal element.
      </p>
      <pre>
        <code class="language-js">
          document.getElementById('modal1').hide();
        </code>
      </pre>

    </div>
  </div>
</template>

<style>
  #content-modals {
    .code-sample {
      .as-rendered, .as-code {
        display: block;
        width: 100%;
      }
    }
  }
</style>
