function hideSideBar() {
const sidebar = document.querySelector('.sidebar')
const mainContent = document.querySelector('.mainContent')
const dateDiv = document.getElementById('dateDiv')

document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large');
  if (dateDiv.style.display ==='none') {
    dateDiv.style.display ='block'
    dateDiv.classList.add('formDisplay')
    dateDiv.classList.remove('formHide')
  } else {
    dateDiv.style.display = 'none'
    dateDiv.classList.add('formHide')
    dateDiv.classList.remove('formDisplay')
  }
  }
};

function todoDom() {
  let modal = document.getElementById('taskModal')
  let taskButton = document.getElementById('modalBtn')
  let taskClose = document.getElementsByClassName('close')[0]
  taskButton.onclick = function() {
    modal.style.display = 'block'
  }
  taskClose.onclick = function() {
    modal.style.display = 'none'
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none'
    }
  }
};
export {todoDom, hideSideBar};