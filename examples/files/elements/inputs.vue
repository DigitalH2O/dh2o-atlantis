<template>
  <div id="content-inputs" class="section">
    <div class="title"><h1>Inputs</h1></div>
    <div class="content">
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
      <input type="text" id="search-input" class="search" placeholder="Search" />
      <label for="text-area-input">Textarea</label>
      <textarea name="name" id="text-area-input" rows="3" placeholder="Textarea"></textarea>
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
    </div>
  </div>
</template>
