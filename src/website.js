function hideSideBar() {
  const sidebar = document.querySelector('.sidebar')
  const mainContent = document.querySelector('.mainContent')
  const projectDiv = document.getElementById('projectDiv')

  document.querySelector('button').onclick = function () {
    sidebar.classList.toggle('sidebar_small');
    mainContent.classList.toggle('main-content_large');
    if (projectDiv.style.display ==='none') {
      projectDiv.style.display ='block'
      projectDiv.classList.add('formDisplay')
      projectDiv.classList.remove('formHide')
    } else {
      projectDiv.style.display = 'none'
      projectDiv.classList.add('formHide')
      projectDiv.classList.remove('formDisplay')
    }
    }
  };
  function clearElement(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild)
    }
  }
  function todoDom() {
    let modal = document.getElementById('taskModal');
    let taskButton = document.getElementById('modalBtn');
    let taskClose = document.getElementsByClassName('close')[0];
    taskButton.onclick = function() {
      modal.style.display = 'block'
      document.getElementById('newTaskDate').valueAsDate = new Date();
    };
    taskClose.onclick = function() {
      modal.style.display = 'none'
    };
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none'
      }
    }
    // submitBtn.addEventListener('click', e =>{
    //   modal.style.display = 'none'
    // })
  };

  // window.addEventListener('DOMContentLoaded', e =>{
  //   e.preventDefault()
  // })
  document.addEventListener('DOMContentLoaded', () => {
    submitBtn.addEventListener('click', () => {
      document.querySelector('form').reset;

    });
  })
  export {todoDom, clearElement, hideSideBar}