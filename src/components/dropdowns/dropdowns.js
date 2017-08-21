// Function for checking if class is in any parent elements
// Returning that parent element if it does exist
function hasClassInTree (element, className) {
  function hasClass (element, className) {
    if (!(!className || !element || !element.classList || !element.classList.contains(className))) {
      return element
    }
    return null
  }

  function parentByClass (childElement, className) {
    if (!childElement || childElement === document) {
      return null
    } else if (hasClass(childElement, className)) {
      return childElement
    } else {
      return parentByClass(childElement.parentNode, className)
    }
  }

  return hasClass(element, className) || parentByClass(element, className)
}

var dh2oDropdown = function (dropdown, autoShow=true, callback=null) {
  var contentStr = 'dh2o-dropdown-content'
  debugger
  // If you are passing in a string get element from it
  if (typeof dropdown === 'string') {
    dropdown = document.getElementById(dropdown)
  }

  // Check if dropdown already has show method on it.
  // If so, show dropdown and return it.
  if (dropdown.show) {
    if (autoShow) { dropdown.show() }
    return dropdown
  }

  // Dropdown show and hide functions
  var content = dropdown.getElementsByClassName(contentStr)[0]
  dropdown.show = function () {
    if (content) {
      if (callback) { callback(true) }
      content.classList.remove('animate-out')
      content.classList.add('animate-in')
    }
  }
  dropdown.hide = function () {
    if (content && content.classList.contains('animate-in')) {
      content.classList.remove('animate-in')
      content.classList.add('animate-out')
      setTimeout(function () {
        if (callback) { callback(false) }
        content.classList.remove('animate-out')
      }, 300)
    }
  }

  // Show modal
  if (autoShow) { dropdown.show() }
}

// Add document click listener that will close dropdowns and trigger open those who have a dropdown container
document.addEventListener('click', function (e) {
  debugger
  var containerStr = 'dh2o-dropdown-container'
  var trigger = 'dh2o-dropdown-trigger'
  var clickTarget = e.target
  var triggerEle = (hasClassInTree(clickTarget, trigger) ? clickTarget : false)
  var parentContainerElement = hasClassInTree(clickTarget, containerStr)

  // Close all dropdowns
  var dropdowns = document.getElementsByClassName(containerStr)
  for (var i = 0; i < dropdowns.length; i++) {
    // Only hide is the element isnt the same as your current parent container element
    if (!parentContainerElement || !dropdowns[i].isSameNode(parentContainerElement)) {
      if (dropdowns[i].hide) { dropdowns[i].hide() }
    }
  }

  if (triggerEle) {
    var containerElement = hasClassInTree(clickTarget, containerStr)
    dh2oDropdown(containerElement)
  }
})

export default dh2oDropdown
