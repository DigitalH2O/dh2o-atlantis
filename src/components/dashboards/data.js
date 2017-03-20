export default class data {
  constructor (data) {
    this.data = data
  }

  // Loop through data and make sure its injected with empty and full rows
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
    if (this.data[this.data.length - 1].length !== 0) { this.data.push([]); return }
  }

  // addWidget will take in widget object and add it to designated location
  addWidget (widget, location) {
    console.log('add')
    this.validate(widget)
    this.data[location.rowIndex].push(widget)
    this.clean()
  }

  // moveWidget will locate widget based upon id, remove it and add it to new location
  moveWidget (widgetId, location) {
    console.log('move')
    for (var i = 0; i < this.data.length; i++) {
      console.log(this.data[i])
    }
  }

  // Validate will take widget object and make sure it has
  // enough information and is valid to be used within the rest of the application
  validate (widget) {
    if (!widget.id) { throw new Error('Widget must have unique id') }

    return true
  }
}
