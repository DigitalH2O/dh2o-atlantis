import interactjs from 'interact.js'

export default class interact {
  constructor (info = {}) {
    this.config = info.config
    this.draggables = info.draggables
    this.dropzones = info.dropzones
    this.autoScrollContainer = info.autoScrollContainer
    this.onDrop = info.onDrop

    this.setDraggables()
    this.setDropzones()
  }

  // Create draggable buttons
  setDraggables () {
    interactjs(this.draggables)
      .draggable({
        inertia: true,
        autoScroll: {
          container: document.querySelector(this.autoScrollContainer)
        },
        onmove: (event) => {
          var target = event.target
          target.style.position = 'fixed'
          target.style.left = event.pageX - (target.clientWidth / 2)
          target.style.top = event.pageY
          target.classList.add('dragging')
        },
        // On end reset back to original position
        onend: (event) => {
          let target = event.target
          target.style.position = null
          target.style.left = null
          target.style.top = null
          target.classList.remove('dragging')
        }
      })
  }

  // Create dropzone for draggable elements
  setDropzones () {
    interactjs(this.dropzones)
      .dropzone({
        accept: this.draggables,
        overlap: 'pointer', // cursor pointer determines if in dropzone
        ondropactivate: (event) => {
          event.target.classList.add('ready')
        },
        ondragenter: (event) => {
          event.target.classList.add('on')
        },
        ondragleave: (event) => {
          event.target.classList.remove('on')
        },
        ondrop: this.onDrop,
        ondropdeactivate: (event) => {
          event.target.classList.remove('on')
          event.target.classList.remove('ready')
        }
      })

    // Super important - touch it and die!!! I love you
    // http://interactjs.io/docs/faq/#changing-dropzones-while-dragging
    interactjs.dynamicDrop(true)
  }
}
