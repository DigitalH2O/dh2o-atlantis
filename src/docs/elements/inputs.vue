<script>
  import SlimSelect from 'slim-select'

  export default {
    mounted () {
      /* eslint-disable no-new */
      new SlimSelect({
        select: '#select-input'
      })

      new SlimSelect({
        select: '#multi-select-input'
      })

      new SlimSelect({
        select: '#select'
      })
    }
  }
</script>

<style lang="scss">
  @import '../../../src/scss/_partials.scss';

  #content-inputs {

  }
</style>

<template>
  <div id="content-inputs">
    <div class="bar"><h1>Inputs</h1></div>
    <div class="stage">
        <div class="widget body">
          <p>
            In order to keep things simple default styles have been added
            to input fields and there types
          </p>
          <div class="form-group">
            <label for="text-input">Text</label>
            <input type="text" id="text-input" placeholder="Text" />
          </div>

          <div class="form-group">
            <label for="email-input">Email</label>
            <input type="email" id="email-input" placeholder="Email" />
          </div>

          <div class="form-group">
            <label for="password-input">Password</label>
            <input type="password" id="password-input" placeholder="Password" />
          </div>

          <div class="form-group">
            <label for="search-input">Search</label>
            <input type="search" id="search-input" placeholder="Search" />
          </div>

          <div class="form-group">
            <label>Select</label>
            <select name="select" id="select-input">
              <option value="value1">Value</option>
              <option value="value2">Value 2</option>
              <option value="value3">Value 3</option>
              <option value="value4">Value 4</option>
              <option value="value5">Value 5</option>
            </select>
          </div>

          <div class="form-group">
            <label>Multi Select</label>
            <select multiple name="select" id="multi-select-input">
              <option value="">Value</option>
              <option value="">Value 2</option>
              <option value="">Value 3</option>
              <option value="">Value 4</option>
              <option value="">Value 5</option>
            </select>
          </div>

          <div class="form-group">
            <label for="text-area-input">Textarea</label>
            <textarea name="name" id="text-area-input" rows="4" placeholder="Textarea placeholder"></textarea>
          </div>

          <div class="form-group">
            <label>Checkbox Tree </label>
            <div class="checkbox-container">
              <label class="checkbox-label">
                <input type="checkbox" :indeterminate.prop="true"/>
                Indeterminate State
              </label>
              <div class="checkbox-container">
                <label class="checkbox-label">
                  <input type="checkbox" checked="true"/>
                  Checked State
                </label>
                <label class="checkbox-label">
                  <input type="checkbox"/>
                  Unchecked State
                </label>
              </div>
            </div>
          </div>

          <div class="form-group">
            <label>Checkbox Inline</label>
            <label class="checkbox-label">
              <input type="checkbox" :indeterminate.prop="true"/>
              Indeterminate State
            </label>
            <label class="checkbox-label">
              <input type="checkbox" checked="true"/>
                Checked State
            </label>
            <label class="checkbox-label">
              <input type="checkbox"/>
              Unchecked State
            </label>
          </div>

        </div>

        <div class="widget">
          <header><h2>Error</h2></header>
          <div class="body">
            <p>
              If you would like to mark an input field as an error just add the .error class to the input
            </p>

            <input type="search" value="Error Text" class="error" />
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <input type="search" value="Error Text" class="error" />
                </script>
              </code>
            </pre>
          </div>
        </div>

        <div class="widget">
          <header><h2>Disabled</h2></header>
          <div class="body">
            <p>
              Use the <code>disabled</code> attribute to disable inputs
            </p>

            <code-sample>
              <input type="text" value="Disabled Field" disabled="disabled" />
            </code-sample>
            <!-- <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <input type="text" value="Disabled Field" disabled="disabled" />
                </script>
              </code>
            </pre> -->
          </div>
        </div>


        <div class="widget">
          <header><h2>Spacing</h2></header>
          <div class="body">
            <p>
              In scenarios where you need additional spacing between groups of label/inputs wrap them in a .form-group class
            </p>

            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <div class="form-group">
                    <label>Text</label>
                    <input type="text" />
                  </div>
                </script>
              </code>
            </pre>
          </div>
        </div>

        <div class="widget">
          <header><h2>Selects</h2></header>
          <div class="body">
            <p>
              Select dropdowns will be using a vanilla javascript called slim-select. Docs can be found at <a href="http://slimselectjs.com" target="_blank">slimselectjs.com</a>
            </p>

            <select name="select" id="select">
              <option value="">Value</option>
              <option value="">Value 2</option>
              <option value="">Value 3</option>
              <option value="">Value 4</option>
              <option value="">Value 5</option>
            </select>

            <pre>
              <code class="language-javascript">
                <script type="prism-javascript">
                  import SlimSelect from 'slim-select'

                  new SlimSelect({
                    select: '#select'
                  })
                </script>
              </code>
            </pre>
          </div>
        </div>

        <div class="widget">
          <header><h2>Checkboxes</h2></header>
          <div class="body">
            <p>
              Checkboxes need to have a class of .checkbox-label on their labels to style them properly and have a unique HTML structure as opposed to the other inputs
            </p>
            <label class="checkbox-label"><input type="checkbox"/> Option 1</label>
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <label class="checkbox-label"><input type="checkbox"/> Option 1</label>
                </script>
              </code>
            </pre>

            <p>
              You may also put .disabled class on the label to grey out the text
            </p>
            <label class="checkbox-label disabled"><input type="checkbox" disabled="disabled" checked="checked" /> Option 1</label>
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <label class="checkbox-label disabled"><input type="checkbox" disabled="disabled" /> Option 1</label>
                </script>
              </code>
            </pre>
          </div>
        </div>

        <div class="widget">
          <header><h2>Toggle</h2></header>
          <div class="body">
            <div class="toggle">
              <input type="checkbox" name="toggle" class="toggle-checkbox" id="toggle" checked>
              <label class="toggle-label" for="toggle">
                  <span class="toggle-inner"></span>
                  <span class="toggle-switch"></span>
              </label>
            </div>
            <pre>
              <code class="language-markup">
                <script type="prism-html-markup">
                  <div class="toggle">
                    <input type="checkbox" name="toggle" class="toggle-checkbox" id="toggle" checked>
                    <label class="toggle-label" for="toggle">
                        <span class="toggle-inner"></span>
                        <span class="toggle-switch"></span>
                    </label>
                  </div>
                </script>
              </code>
            </pre>
          </div>
        </div>

    </div>
  </div>
</template>
