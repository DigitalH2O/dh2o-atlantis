document.addEventListener('click', function (e) {
  let trigger = 'dh2o-dropdown-trigger'
  let content = 'dh2o-dropdown-content'
  let dropdown
  let triggerEle = e.target.classList.contains(trigger) ? e.target : window.getParentElement(e.target, trigger)

  if (triggerEle) {
    e.stopPropagation()
    let stackingContextParent = window.findParentStackingContext(triggerEle)

    // Grab the dropdown content element
    for (let i = 0; i < triggerEle.children.length; i++) {
      if (triggerEle.children[i].classList.contains(content)) {
        dropdown = triggerEle.children[i]
      }
    }

    // Dropdown show and hide functions
    dropdown.show = () => {
      stackingContextParent.classList.add('stacking-context-front')
      dropdown.classList.remove('animate-out')
      dropdown.classList.add('animate-in')
    }
    dropdown.hide = () => {
      stackingContextParent.classList.remove('stacking-context-front')
      dropdown.classList.remove('animate-in')
      dropdown.classList.add('animate-out')
      setTimeout(() => {
        dropdown.classList.remove('animate-out')
      }, 300)
    }

    dropdown.show()

    dropdown.onclick = (e) => {
      e.stopPropagation()
    }
  } else {
    let dropdowns = document.getElementsByClassName(content)

    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('animate-in') && dropdowns[i].hide) {
        dropdowns[i].hide()
      }
    }
  }
})

// This will be reusable for our modals/dropdowns and anything else that needs to
// be shown in front of other stacking contexts
window.findParentStackingContext = function (initialEle) {
  let lastParentEle

  function innerClosure (ele) {
    if (ele.classList.contains('app')) {
      return
    }

    lastParentEle = ele

    // If no parent is available, we were unable to locate .app so return null
    if (!ele.parentElement) {
      lastParentEle = null
      return
    }

    innerClosure(ele.parentElement)
  }

  innerClosure(initialEle)

  return lastParentEle
}

// This allows you to look up a childs parents recursively to determine if
// the child element has a parent with the specified className, if so it returns the parent ele
window.getParentElement = function (initialEle, parentClass) {
  let parentEle
  function findParent (ele) {
    if (ele.classList.contains(parentClass)) {
      parentEle = ele
      return
    }
    if (ele.parentElement) {
      findParent(ele.parentElement, parentClass)
    }
    return
  }

  findParent(initialEle.parentElement)
  return parentEle
}
