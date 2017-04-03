export default class html {
  constructor (info = {}) {
    this.main = info.main
    this.container = document.querySelector(this.main.main)
  }

  cleanRows () {
    var rows = this.container.childNodes
    for (var i = 0; i < rows.length; i++) {
      if (!rows[i]) { console.log('hit') }

      if (i === 0 && rows[i].innerHTML.trim() !== '') {
        this.container.insertBefore(this.createEmptyRow(), this.container.firstChild)
        this.cleanRows()
        return
      }

      if (i % 2 !== 0) {
        // Make sure odds always have content within them
        if (rows[i].innerHTML.trim() === '' && rows.childNodes) {
          rows.removeChild(rows.childNodes[i])
          this.cleanRows()
          return
        }
      } else {
        // Make sure evens are always empty rows
        if (rows[i].innerHTML.trim() !== '') {
          rows[i - 1].after(this.createEmptyRow())
          this.cleanRows()
          return
        }
      }

      // Check last row and make sure its empty
      if (rows.length - 1 === i && rows[i].innerHTML.trim() !== '') {
        rows[i].after(this.createEmptyRow())
      }
    }
  }

  createEmptyRow () {
    var row = document.createElement('div')
    row.classList.add('dashboard-row')
    row.classList.add('empty')

    return row
  }
}
