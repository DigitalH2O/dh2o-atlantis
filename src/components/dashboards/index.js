import Interact from './interact.js'
import Data from './data.js'
import Html from './html.js'
import config from './config.js'
/* eslint-disable no-new */

export default class DashboardBuilder {
  constructor (info = {}) {
    this.validateConstructor(info)

    // Set callbacks
    this.newWidgetCallback = info.newWidget
    this.onChangeCallback = info.onChange

    // Set class variables
    this.config = config()
    this.data = new Data({
      data: info.data,
      onChange: (data) => { this.onChangeCallback(data) }
    })
    this.main = info.main

    // Clean data
    this.data.clean()

    // Initiate html class
    this.html = new Html({
      main: this
    })
    this.html.cleanRows()

    // Instantiate interact js functionality
    new Interact({
      config: this.config,
      draggables: info.draggables,
      dropzones: this.main + ' .' + this.config.classes.row,
      autoScrollContainer: info.autoScrollContainer || 'main',
      onDrop: (event) => { this.onDrop(event) }
    })

    // Add MutationObserver to select
    new MutationObserver((mutations) => {
      console.log(mutations)
      this.html.cleanRows()
    }).observe(document.querySelector(this.main), {
      attributes: true,
      childList: true,
      characterData: true
    })
  }

  validateConstructor (info) {
    if (!info.data) { throw new Error('Must pass data into constructor') }
    if (!info.draggables) { throw new Error('Must pass draggable items into constructor') }
    if (!info.main) { throw new Error('Must pass main div container into constructor') }
    if (!info.newWidget) { throw new Error('Must pass newWidget function into constructor') }
    if (!info.onChange) { throw new Error('Must pass onChange function into constructor') }
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

  // Identify dropped item and either call newWidget or more existing widget
  onDrop (event) {
    let droppable = event.relatedTarget
    let droppableData = Object.assign({}, droppable.dataset)
    let dropzone = event.target
    let location = {
      new: !dropzone.dataset.index,
      rowIndex: dropzone.dataset.index
    }
    if (location.new) {
      let previousSibling = dropzone.previousSibling
      if (previousSibling) {
        location.rowIndex = previousSibling.dataset.index
      }
    }

    // New widget drop
    if (this.newWidget && droppableData.id === undefined) {
      this.newWidget(droppableData, location)
    }

    // Move widget
    if (droppableData.id) {
      this.data.moveWidget(droppableData.id, location)
    }
  }
}
