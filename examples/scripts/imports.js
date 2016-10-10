// This script is used to loop through imports and append to main
document.querySelectorAll('link[rel="import"]').forEach(function(info) {
  if(info.classList.contains('no-import')) {
    return;
  }
  var templateContent = info.import.querySelector('template').content;
  var clone = document.importNode(templateContent, true);
  document.querySelector('.main').appendChild(clone);
});

//if the URL has an anchor in it, we should try to navigate to the anchor again
//(now that all the content's loaded)
var targetAnchor = window.location.hash;

if (targetAnchor !== '') {
  //we need to unset the hash first...
  window.location.hash = '';

  //...then reset its initial value, forcing the page to navigate again
  window.location.hash = targetAnchor;
}
