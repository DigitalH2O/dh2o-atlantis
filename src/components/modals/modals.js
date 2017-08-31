var dh2oModal = function (idOrElement = false, autoShow = false, callback = null) {
  if (!idOrElement) { throw new Error('You must pass in an id or a DOM element') }


  let modal
  if (typeof idOrElement === 'string') {
    // it's an id:
    modal = document.getElementById(modalId)
    if (!modal) { throw new Error('Could not find modal. Please make sure you pass an id of a modal that exists') }
  }
  else {
    // it's a DOM element (hopefully):
    modal = idOrElement
    if (!modal) { throw new Error(`Expected a modal element, but got ${modal}`) }
  }

  var closeName = 'modal-close'

  // Check to make sure modal content exist
  var content = modal.querySelector('.modal-content')
  if (!content) { console.error('Modal content does not exist'); return }

  // Make sure close x is in modal content
  var contentChildren = content.childNodes
  var hasClose = false
  for (var c = 0; c < contentChildren.length; c++) {
    if (contentChildren[c].classList && contentChildren[c].classList.contains('modal-close')) {
      hasClose = true
    }
  }
  if (!hasClose) {
    var close = document.createElement('div')
    close.classList.add('modal-close')

    var closeX = document.createElement('div')
    closeX.classList.add('modal-close-x')
    closeX.innerHTML = 'X'
    close.append(closeX)

    content.append(close)
  }

  // Check if modal already has show method on it.
  // If so, show modal and return it.
  if (modal.show) {
    if (autoShow) { modal.show() }
    return modal
  }

  // Add functionality to animate hide and show of modal
  modal.show = function () {
    modal.classList.remove('animate-out')
    modal.classList.add('animate-in')
    if (callback) { callback(true) }
  }
  modal.hide = function () {
    if (modal.isLocked) {
      // you can't hide the modal while it's locked -- you have to unlock() it
      // first
      return
    }

    modal.classList.remove('animate-in')
    modal.classList.add('animate-out')
    setTimeout(function () {
      modal.classList.remove('animate-out')
      if (callback) { callback(false) }
    }, 300)
  }

  modal.isLocked = false

  // call this to prevent the user from closing the modal. Note that hide()
  // won't work when the modal is locked.
  modal.lock = function () {
    modal.isLocked = true
    modal.querySelector('.modal-close-x').innerHTML = ''
  }
  modal.unlock = function () {
    modal.isLocked = false
    modal.querySelector('.modal-close-x').innerHTML = 'X'
  }

  // Show modal
  if (autoShow) { modal.show() }

  // Add event listener for closing
  // based upon clicking background
  modal.onclick = function (event) {
    if (event.target === modal) {
      modal.hide()
    }
  }

  // Add onclick handlers for any model-close buttons
  var closes = modal.getElementsByClassName(closeName)
  for (var i = 0; i < closes.length; i++) {
    closes[i].onclick = function () {
      modal.hide()
    }
  }

  return modal
}

// Add a document listener, that targets modal buttons
document.addEventListener('click', function (event) {
  var buttonName = 'dh2o-modal-btn'
  var dataset = 'dh2oModal'

  if (event.target.classList && event.target.classList.contains(buttonName)) {
    // Get all elements needed
    var element = event.target
    var modalId = element.dataset[dataset]

    dh2oModal(modalId, true)
  }
})

// Add keydown function for esc and enter
document.onkeydown = function (evt) {
  evt = evt || window.event
  var isEscape = false
  var isEnter = false
  if ('key' in evt) {
    isEscape = (evt.key === 'Escape' || evt.key === 'Esc')
    isEnter = (evt.key === 'Enter')
  } else {
    isEscape = (evt.keyCode === 27)
    isEnter = (evt.keyCode === 13)
  }

  // If you hit escape close last modal
  var modals
  if (isEscape) {
    modals = document.querySelectorAll('.dh2o-modal.animate-in')
    if (modals.length > 0) {
      if (modals[modals.length - 1].hide) {
        modals[modals.length - 1].hide()
      }
    }
  }
}

export default dh2oModal
