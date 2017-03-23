import Interact from './interact.js'
import Data from './data.js'
import config from './config.js'

export default class VueBuildIntro {
  constructor (info = {}) {
    // Set class variables
    this.data = new Data(info.data)
    this.config = config()
    this.main = info.main
    this.newWidgetCallback = info.newWidget

    this.data.clean()

    /* eslint-disable no-new */
    new Interact({
      config: this.config,
      draggables: info.draggables,
      dropzones: this.main + ' .' + this.config.classes.row,
      autoScrollContainer: info.autoScrollContainer || 'main',
      onDrop: (event) => { this.onDrop(event) }
    })
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
  }

}
