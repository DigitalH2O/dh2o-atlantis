var dh2oModal = function (modalId, autoShow, callback = null) {
  modalId = modalId || false
  autoShow = autoShow || false
  if (!modalId) { throw new Error('Must pass a modal id') }

  var modal = document.getElementById(modalId)
  if (!modal) { throw new Error('Could not find modal. Please make sure you pass an id of a modal that exists') }
  var closeName = 'modal-close'

  // Check to make sure modal id exists
  if (!modal) { console.error('Modal does not exist'); return }

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
    modal.classList.remove('animate-in')
    modal.classList.add('animate-out')
    setTimeout(function () {
      modal.classList.remove('animate-out')
      if (callback) { callback(false) }
    }, 300)
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

  // If you hit enter find a modal-enter class and click it
  if (isEnter) {
    modals = document.querySelectorAll('.dh2o-modal.animate-in')
    if (modals.length > 0) {
      var modal = modals[modals.length - 1]
      var enterer = modal.querySelector('.modal-enter')
      if (enterer) {
        enterer.click()
      }
    }
  }
}

export default dh2oModal
