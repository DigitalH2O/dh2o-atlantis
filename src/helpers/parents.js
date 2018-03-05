// This allows you to look up a childs parents recursively to determine if
// the child element has a parent with the specified className, if so it returns the parent ele
function getParentElement (el, parentClass) {
  var parentEle
  function findParent (ele) {
    if (!ele) {
      return
    }

    if (ele.classList.contains(parentClass)) {
      parentEle = ele
      return
    }
    if (ele.parentElement) {
      findParent(ele.parentElement, parentClass)
    }
  }

  findParent(el.parentElement)
  return parentEle
}

// This is useful for finding a parent element all the way up the stack
function getLastParentElement (el, lastElement) {
  lastElement = lastElement || 'app'
  var lastParentEle

  function innerClosure (ele) {
    if (ele.classList.contains(lastElement)) {
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

  innerClosure(el)

  return lastParentEle
}

module.exports = {
  getParentElement: getParentElement,
  getLastParentElement: getLastParentElement
}
