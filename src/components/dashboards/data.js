export default class data {
  constructor (data) {
    this.data = data
  }

  // Loop through data and make sure its injected with empty and full rows
  // Also make sure each widget is clean as well
  clean () {
    // If data array is empty lets add an empty row
    if (this.data.length === 0) { this.data.push([]); return }

    // Loop through and identify even or odd
    for (var i = 0; i < this.data.length; i++) {
      // Check evens, evens should always be empty
      if (i % 2 === 0 && this.data[i].length !== 0) {
        this.data.splice(i, 0, [])

        return this.clean()
      }

      // Check odds, odds should always have something in them
      if (Math.abs(i % 2) === 1 && this.data[i].length === 0) {
        this.data.splice(i, 1)

        return this.clean()
      }
    }

    // Lets make sure the end of the data has an empty row
    if (this.data[this.data.length - 1].length !== 0) { this.data.push([]) }

    // Loop through data and make sure each widget has an id
    for (var d = 0; d < this.data.length; d++) {
      for (var w = 0; w < this.data[d].length; w++) {
        this.cleanWidget(this.data[d][w])
      }
    }
  }

  // addWidget will take in widget object and add it to designated location
  addWidget (widget, location) {
    this.cleanWidget(widget)
    this.data[location.rowIndex].push(widget)
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
