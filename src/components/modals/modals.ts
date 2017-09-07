// Add a document listener, that targets modal buttons
document.addEventListener('click', function (event: MouseEvent) {
  var buttonName = 'dh2o-modal-btn'
  var dataset = 'dh2oModal'
  var element = event.target as HTMLElement

  if (element.classList && element.classList.contains(buttonName)) {
    // Get all elements needed
    var modalId = element.dataset[dataset]

    if (modalId) {
      let modal = new ModalClass({
        el: document.getElementById(modalId)
      })
      modal.show()
    }
  }
})

interface ModalOptions {
  el: HTMLElement
  isLocked?: boolean
  callback?: Function
}

let ModalClass = class Modal {
  modal: HTMLElement
  widget: HTMLElement

  isLocked: boolean = false // Whether or not closing the modal is locked
  isOpen: boolean = false // Whether or not the modal is currently open

  callback: Function = null
  constructor (options: ModalOptions) {
    // Make sure they pass in an element
    if (!options.el) { throw new Error(`Expected a modal element, but got ${options.el}`) }

    // Set elements in class for future targeting
    this.modal = options.el
    this.widget = this.modal.querySelector('.widget') as HTMLElement
    if (!this.widget) { throw new Error('Must have widget div in root of modal') }

    this.isLocked = options.isLocked || false
    this.callback = options.callback || null

    this.addCloseTriggers()
  }

  hide () {
    // Only hide if its not locked
    if (this.isLocked) { return }

    this.modal.classList.remove('animate-in')
    this.modal.classList.add('animate-out')
    setTimeout(() => {
      this.modal.classList.remove('animate-out')
      this.isOpen = false
      this.triggerCallback()
    }, 300)
  }

  show () {
    this.modal.classList.remove('animate-out')
    this.modal.classList.add('animate-in')
    this.isOpen = true
    this.triggerCallback()
  }

  // Lock and unlock modal
  lock () { this.isLocked = true; this.triggerCallback() }
  unlock () { this.isLocked = false; this.triggerCallback() }

  // Pass usable values back to a callback function
  triggerCallback() {
    if (!this.callback) {return}

    this.callback({
      modal: this.modal,
      widget: this.widget,
      isLocked: this.isLocked,
      isOpen: this.isOpen
    })
  }

  // Add close triggers for both background click and any elements with the class .modal-close
  addCloseTriggers () {
    // Add event listener for closing based upon clicking background
    this.modal.onclick = (event) => {
      if (event.target === this.modal) {
        this.hide()
      }
    }

    // Add onclick handlers for any model-close buttons
    var closes = this.modal.getElementsByClassName('modal-close')
    for (var i = 0; i < closes.length; i++) {
      (closes[i] as HTMLDivElement).onclick = () => {
        this.hide()
      }
    }
  }
}

export default ModalClass
declare var module: any;
(module).exports = ModalClass