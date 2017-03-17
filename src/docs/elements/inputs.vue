<style lang="scss">
  @import '../../../src/scss/_partials.scss';

  #content-inputs {
    input, select, textarea {
      &:not([type="checkbox"]) {
        margin: 0 0 $spacing-half 0;
      }
    }
  }
</style>

<template>
  <article id="content-inputs">
    <header><h1>Inputs</h1></header>
    <div class="widget">

      <section>
        <p>
          In order to keep things simple default styles have been added
          to input fields and there types
        </p>
        <label for="text-input">Text</label>
        <input type="text" id="text-input" placeholder="Text" />
        <label for="email-input">Email</label>
        <input type="email" id="email-input" placeholder="Email" />
        <label for="password-input">Password</label>
        <input type="password" id="password-input" placeholder="Password" />
        <label for="search-input">Search</label>
        <input type="search" id="search-input" placeholder="Search" />
        <label for="select-input">Select</label>
        <select name="select" id="select-input">
          <option value="">Value</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
        </select>
        <label for="multi-select-input">Multi Select</label>
        <select multiple name="select" id="multi-select-input">
          <option value="">Value</option>
          <option value="">Value 2</option>
          <option value="">Value 3</option>
          <option value="">Value 4</option>
          <option value="">Value 5</option>
        </select>
        <label for="text-area-input">Textarea</label>
        <textarea name="name" id="text-area-input" rows="4" placeholder="Textarea"></textarea>
        <label>Checkbox</label>
        <fieldset>
          <input id="checkbox-input1" type="checkbox"/>
          <label for="checkbox-input1" class="inline checkbox-label">Option 1</label>
          <input id="checkbox-input2" type="checkbox"/>
          <label for="checkbox-input2" class="inline checkbox-label">Option 2</label>
          <input id="checkbox-input3" type="checkbox"/>
          <label for="checkbox-input3" class="inline checkbox-label">Option 3</label>
        </fieldset>
        <div class="message notice">Checkboxes need to have a class of .checkbox-label on their labels to style them properly and have a unique HTML structure as opposed to the other inputs</div>
        <pre>
          <code class="language-markup">
            <script type="prism-html-markup">
              <label>Checkbox</label>
              <fieldset>
                <input id="checkbox-input1" type="checkbox"/>
                <label for="checkbox-input1" class="inline checkbox-label">Option 1</label>
                <input id="checkbox-input2" type="checkbox"/>
                <label for="checkbox-input2" class="inline checkbox-label">Option 2</label>
                <input id="checkbox-input3" type="checkbox"/>
                <label for="checkbox-input3" class="inline checkbox-label">Option 3</label>
              </fieldset>
            </script>
          </code>
        </pre>
        <div class="message notice">Switching input types sets icons</div>
      </section>

      <section>
        <header><h2>Toggle</h2></header>
        <code-sample>
          <div class="toggle">
            <input type="checkbox" name="toggle" class="toggle-checkbox" id="toggle" checked>
            <label class="toggle-label" for="toggle">
                <span class="toggle-inner"></span>
                <span class="toggle-switch"></span>
            </label>
          </div>
        </code-sample>
      </section>

    </div>
  </article>
</template>
