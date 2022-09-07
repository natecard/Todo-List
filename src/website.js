
function menu() {
const sidebar = document.querySelector('.sidebar')
const mainContent = document.querySelector('.main-content')
const projectForm = document.getElementById('project-form')

document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large');
  if (projectForm.style.display ==='none') {
    projectForm.style.display ='block'
    projectForm.classList.add('form-display')
    projectForm.classList.remove('form-hide')
  } else {
    projectForm.style.display = 'none'
    projectForm.classList.add('form-hide')
    projectForm.classList.remove('form-display')
  }
  }
}

function taskDom() {
  const main = document.getElementById('toDoList');
  // main.setAttribute('id','todoList')
  const list = document.createElement('ul').classList.add('taskList');
  // list.setAttribute('id', 'taskList')
  const taskDiv = document.createElement('div').classList.add('taskContainer');
  // taskDiv.setAttribute('id','taskContainer')
  const taskTitle = document.createElement('div').classList.add('title');
  // taskTitle.setAttribute('id', 'taskTitle')
  const taskDetails = document.createElement('div').classList.add('details');
  // taskDetails.setAttribute('id', 'taskDetails')
  const taskDate = document.createElement('div').classList.add('date');
  // taskDate.setAttribute('id', 'taskDate')
  const taskDelete = document.createElement('span').classList.add('delete');
  // taskDelete.setAttribute('id', 'taskDelete')
  const taskRight = document.createElement('div').classList.add('rightSide');
  // taskRight.setAttribute('id', 'taskRight')
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
export {taskDom, menu};