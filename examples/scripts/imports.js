// This script is used to loop through imports and append to main
document.querySelectorAll('link[rel="import"]').forEach(function(info) {
  if(info.classList.contains('no-import')) {
    return;
  }
  var templateContent = info.import.querySelector('template').content;
  var clone = document.importNode(templateContent, true);
  document.querySelector('.main').appendChild(clone);
});
