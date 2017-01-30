import parents from '../../helpers/parents.js'

export default function () {
  var eleCache = []
  document.addEventListener('click', function (e) {
    var dropdown
    var trigger = 'dh2o-dropdown-trigger'
    var content = 'dh2o-dropdown-content'
    var triggerEle = e.target.classList.contains(trigger) ? e.target : parents.getParentElement(e.target, trigger)

    if (triggerEle) {
      e.stopPropagation()
      var stackingContextParent = parents.getLastParentElement(triggerEle)

      // Grab the dropdown content element
      for (var i = 0; i < triggerEle.children.length; i++) {
        if (triggerEle.children[i].classList.contains(content)) {
          dropdown = triggerEle.children[i]
        }
      }

      // Dropdown show and hide functions
      dropdown.show = function () {
        // Close any currently open dropdowns and remove them from the cache
        eleCache.forEach(function (ele) {
          ele.hide()
        })
        eleCache = []

        // Add the dropdown node to the element cache
        eleCache.push(dropdown)

        // Add applicable class to the stacking context parent
        if (stackingContextParent) {
          stackingContextParent.classList.add('stacking-context-front')
        }
        dropdown.classList.remove('animate-out')
        dropdown.classList.add('animate-in')
        dropdown.classList.add('open')
      }
      dropdown.hide = function () {
        // Remove the dropdown node from the element cache
        eleCache = eleCache.filter(function (ele) {
          return ele !== dropdown
        })

        // Remove applicable class to the stacking context parent
        if (stackingContextParent) {
          stackingContextParent.classList.remove('stacking-context-front')
        }
        dropdown.classList.remove('animate-in')
        dropdown.classList.remove('open')
        dropdown.classList.add('animate-out')
        setTimeout(function () {
          dropdown.classList.remove('animate-out')
        }, 300)
      }

      dropdown.show()

      dropdown.onclick = function (e) {
        e.stopPropagation()
      }
    } else {
      var dropdowns = document.getElementsByClassName(content)

      for (var i = 0; i < dropdowns.length; i++) {
        if (dropdowns[i].classList.contains('animate-in') && dropdowns[i].hide) {
          dropdowns[i].hide()
        }
      }
    }
  })
}
