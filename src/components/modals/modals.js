// Add a document listener
document.addEventListener('click', function(event){
  let buttonName = 'dh2o-modal-btn';
  let dataset = 'dh2oModal';
  let closeName = 'model-close';

  if(event.target.classList.contains(buttonName)) {
    // Get all elements needed
    let element = event.target;
    let targetId = element.dataset[dataset];
    let modal = document.getElementById(targetId);

    // Add functionality to animate hide and show of modal
    modal.show = () => {
      modal.classList.remove('animate-out');
      modal.classList.add('animate-in');
    };
    modal.hide = () => {
      modal.classList.remove('animate-in');
      modal.classList.add('animate-out');
      setTimeout(() => {
        modal.classList.remove('animate-out');
      }, 300);
    };

    // Show modal
    modal.show();

    // Add event listener for closing
    // based upon clicking background
    modal.onclick = (event) => {
      if(event.target === modal) {
        modal.hide();
      }
    };

    // Add onclick handlers for any model-close buttons
    let closes = modal.getElementsByClassName(closeName);
    for (let i = 0; i < closes.length; i++) {
      closes[i].onclick = () => {
        modal.hide();
      };
    }

  }
});
