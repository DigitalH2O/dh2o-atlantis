window.dh2oModal = function (modalId = false, autoShow = false) {
  if (!modalId) { console.error('Must pass a modal id'); return }

  let modal = document.getElementById(modalId)
  let closeName = 'model-close'

  // Check to make sure modal id exists
  if (!modal) { console.error('Modal does not exist'); return }

  // Check if modal already has show method on it.
  // If so, show modal and return it.
  if (modal.show) {
    if (autoShow) { modal.show() }
    return modal
  }

  // Add functionality to animate hide and show of modal
  modal.show = () => {
    modal.classList.remove('animate-out')
    modal.classList.add('animate-in')
  }
  modal.hide = () => {
    modal.classList.remove('animate-in')
    modal.classList.add('animate-out')
    setTimeout(() => {
      modal.classList.remove('animate-out')
    }, 300)
  }

  // Show modal
  if (autoShow) { modal.show() }

  // Add event listener for closing
  // based upon clicking background
  modal.onclick = (event) => {
    if (event.target === modal) {
      modal.hide()
    }
  }

  // Add onclick handlers for any model-close buttons
  let closes = modal.getElementsByClassName(closeName)
  for (let i = 0; i < closes.length; i++) {
    closes[i].onclick = () => {
      modal.hide()
    }
  }

  return modal
}

// Add a document listener, that targets modal buttons
document.addEventListener('click', function (event) {
  let buttonName = 'dh2o-modal-btn'
  let dataset = 'dh2oModal'

  if (event.target.classList.contains(buttonName)) {
    // Get all elements needed
    let element = event.target
    let modalId = element.dataset[dataset]

    window.dh2oModal(modalId, true)
  }
})
