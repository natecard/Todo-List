function hideSideBar() {
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

function todoDom() {
  const main = document.getElementById('toDoList');
  const list = document.createElement('ul').classList.add('taskList');
  const taskDiv = document.createElement('div').classList.add('taskContainer');
  const taskTitle = document.createElement('div').classList.add('title');
  const taskDetails = document.createElement('div').classList.add('details');
  const taskDate = document.createElement('div').classList.add('date');
  const taskDelete = document.createElement('span').classList.add('delete');
  const taskRight = document.createElement('div').classList.add('rightSide');
  // const submit = document.getElementById('project-submit');
  // submit.addEventListener('click', function(e){
  //   console.log('nope')
  //   e.target.preventDefault();
  // })
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