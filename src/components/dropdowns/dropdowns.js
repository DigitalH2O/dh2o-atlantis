document.addEventListener('click', function(e) {
  let trigger = 'dh2o-dropdown-trigger';
  let content = 'dh2o-dropdown-content';
  let dropdown;

  if(e.target.classList.contains(trigger)) {
    e.stopPropagation();
    let triggerEle = e.target;

    //Grab the dropdown content element
    for(let i = 0; i < triggerEle.children.length; i++) {
      if(triggerEle.children[i].classList.contains(content)) {
        dropdown = triggerEle.children[i];
      }
    }

    dropdown.show = () => {
      dropdown.classList.remove('hide');
    };

    dropdown.hide = () => {
      dropdown.classList.add('hide');
    };

    dropdown.show();

    dropdown.onclick = (e) => {
      e.stopPropagation();
    }

  } else {
    let dropdowns = document.getElementsByClassName(content);

    for(let i = 0; i < dropdowns.length; i++) {
      let currentClassList = dropdowns[i].classList;
      if(!currentClassList.contains('hide')) {
        dropdowns[i].hide();
      }
    }
  }
});
