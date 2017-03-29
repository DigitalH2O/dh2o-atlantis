export default class html {
  constructor (info = {}) {
    this.main = info.main
    this.container = document.querySelector(this.main.main)
  }

  validRows () {
    var rows = this.container.childNodes
    for (var i = 0; i < rows.length; i++) {
      console.log(rows[i])
    }
  }

  cleanRows () {
    var rows = this.container.childNodes
    for (var i = 0; i < rows.length; i++) {
      if (i === 0 && rows[i].innerHTML.trim() === '') {
        this.container.insertBefore('afterbegin', this.createRow())
        this.cleanRows()
        return
      }

      if (i & 1) {
        // ODD

      } else {
        // EVEN
      }
    }

    // for (var i = 0; i < rows.length; i++) {
    //   if (rows[i].innerHTML === '') {
    //     rows.removeChild(rows.childNodes[i])
    //   }
    // }
  }

  createRow () {
    var row = document.createElement('div')
    row.classList.add('dashboard-row')
    row.classList.add('empty')

    return row
  }
}
