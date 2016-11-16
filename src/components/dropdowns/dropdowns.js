export default function () {
  document.addEventListener('click', function (e) {
    let trigger = 'dh2o-dropdown-trigger'
    let content = 'dh2o-dropdown-content'
    let dropdown
    let triggerEle = e.target.classList.contains(trigger) ? e.target : window.getParentElement(e.target, trigger)

    if (triggerEle) {
      e.stopPropagation()
      let stackingContextParent = window.findParentStackingContext(triggerEle)

      // Grab the dropdown content element
      for (let i = 0; i < triggerEle.children.length; i++) {
        if (triggerEle.children[i].classList.contains(content)) {
          dropdown = triggerEle.children[i]
        }
      }

      // Dropdown show and hide functions
      dropdown.show = () => {
        stackingContextParent.classList.add('stacking-context-front')
        dropdown.classList.remove('animate-out')
        dropdown.classList.add('animate-in')
      }
      dropdown.hide = () => {
        stackingContextParent.classList.remove('stacking-context-front')
        dropdown.classList.remove('animate-in')
        dropdown.classList.add('animate-out')
        setTimeout(() => {
          dropdown.classList.remove('animate-out')
        }, 300)
      }

      dropdown.show()

      dropdown.onclick = (e) => {
        e.stopPropagation()
      }
    } else {
      let dropdowns = document.getElementsByClassName(content)

      for (let i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('animate-in') && dropdowns[i].hide) {
          dropdowns[i].hide()
        }
      }
    }
  })
}
