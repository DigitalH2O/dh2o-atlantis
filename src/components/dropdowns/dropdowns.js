export default function () {
  let eleCache = []
  document.addEventListener('click', function (e) {
    let dropdown
    let trigger = 'dh2o-dropdown-trigger'
    let content = 'dh2o-dropdown-content'
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
        // Close any currently open dropdowns and remove them from the cache
        eleCache.forEach((ele) => {
          ele.hide()
        })
        eleCache = []

        // Add the dropdown node to the element cache
        eleCache.push(dropdown)

        // Add applicable class to the stacking context parent
        stackingContextParent.classList.add('stacking-context-front')
        dropdown.classList.remove('animate-out')
        dropdown.classList.add('animate-in')
      }
      dropdown.hide = () => {
        // Remove the dropdown node from the element cache
        eleCache = eleCache.filter((ele) => {
          return ele !== dropdown
        })

        // Remove applicable class to the stacking context parent
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
