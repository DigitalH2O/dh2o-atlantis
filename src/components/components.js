var dh2oModal = require('./modals/modals')
var dh2oDropdown = require('./dropdowns/dropdowns')

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
    return
  }

  findParent(initialEle.parentElement)
  return parentEle
}

module.exports = { dh2oModal, dh2oDropdown }
