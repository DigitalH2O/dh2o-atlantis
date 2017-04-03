export default class data {
  constructor (info = {}) {
    this.data = JSON.parse(JSON.stringify(info.data.slice(0))) // Clone data
    this.onChange = info.onChange
  }

  // Loop through and make sure there are no
  // empty rows and that widgets are clean
  clean () {
    for (var d = 0; d < this.data.length; d++) {
      // Remove empty rows
      if (!this.data[d].length) { this.data.splice(d, 1); this.clean(); return }

      // Loop through data and make sure each widget has an id
      for (var w = 0; w < this.data[d].length; w++) {
        this.cleanWidget(this.data[d][w])
      }
    }

    this.onChange(this.data.slice(0))
  }

  // addWidget will take in widget object and add it to designated location
  addWidget (widget, location) {
    this.cleanWidget(widget)
    if (location.new) {
      if (location.rowIndex === undefined) {
        this.data.unshift([widget])
      } else {
        this.data.splice(location.rowIndex + 1, 0, [widget])
      }
    } else {
      this.data[location.rowIndex].push(widget)
    }
    this.clean()
  }

  // moveWidget will locate widget based upon id, remove it and add it to new location
  moveWidget (widgetId, location) {
    for (var r = 0; r < this.data.length; r++) {
      for (var w = 0; w < this.data[r].length; w++) {
        if (String(this.data[r][w].id) === String(widgetId)) {
          let widget = Object.assign({}, this.data[r][w])
          // Remove from data
          this.data[r].splice(w, 1)

          // Add to data
          this.addWidget(widget, location)

          this.clean()
          return
        }
      }
    }
  }

  deleteWidget (widgetId) {

  }

  // Take in widget object and make sure it clean a usable
  cleanWidget (widget) {
    if (!widget.id) { widget.id = Math.floor(Math.random() * 1000000) }
  }
}
