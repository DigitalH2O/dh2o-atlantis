import interact from 'interact.js'
import Data from './data.js'
import {classes} from './config.js'

export default class VueBuildIntro {
  constructor (info = {}) {
    // Set class variables
    this.data = new Data(info.data)
    this.draggables = info.draggables
    this.config = { classes: classes() }
    this.main = info.main
    this.dropzones = this.main + ' .' + this.config.classes.dropzone
    this.newWidgetCallback = info.newWidget
    this.autoScrollContainer = 'main'
    if (info.autoScrollContainer) { this.autoScrollContainer = info.autoScrollContainer }

    this.data.clean()

    this.setDraggables()
    this.setDropzones()
  }

  newWidget (droppableData, dropzoneIndex) {
    let callback = this.newWidgetCallback(droppableData)
    if (callback.then) {
      callback.then((data) => {
        this.data.addWidget(data, dropzoneIndex)
      })
    } else {
      this.data.addWidget(callback, dropzoneIndex)
    }
  }

  // Create draggable buttons
  setDraggables () {
    interact(this.draggables)
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
    interact(this.dropzones)
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
      ondrop: (event) => {
        let droppable = event.relatedTarget
        let droppableData = Object.assign({}, droppable.dataset)
        let dropzone = event.target
        let location = {
          rowIndex: dropzone.dataset.index
        }

        // New widget drop
        if (this.newWidget && droppableData.id === undefined) {
          this.newWidget(droppableData, location)
        }

        // Move widget
        if (droppableData.id) {
          this.data.moveWidget(droppableData.id, location)
        }
      },
      ondropdeactivate: (event) => {
        event.target.classList.remove('on')
        event.target.classList.remove('ready')
      }
    })

    // Super important - touch it and die!!! I love you
    // http://interactjs.io/docs/faq/#changing-dropzones-while-dragging
    interact.dynamicDrop(true)
  }
}
