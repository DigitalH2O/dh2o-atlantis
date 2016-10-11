let $ = require('jquery');

module.exports = function() {
  let triggers = document.getElementsByClassName('dh2o-dropdown-trigger');

  Array.prototype.forEach.call(triggers, (element) => {
    element.onclick = function(event) {
      event.stopPropagation();

      let targetEle = event.target;
      let contentChild;
      //There should only be one child, but just in case
      Array.prototype.forEach.call(targetEle.children, (child) => {
        if(child.classList.contains('dh2o-dropdown-content')) {
          child.classList.remove('hide');
        }
      });
    };
  });

  $(document).click(function(event) {
    let container = $('dh2o-dropdown-trigger');
    if(container.has(event.target).length === 0 &&
      !$('.dh2o-dropdown-content').hasClass('hide')) {
      $('.dh2o-dropdown-content').addClass('hide');
    }
  });
}