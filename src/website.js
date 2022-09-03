import { format } from "date-fns";

const sidebar = document.querySelector('.sidebar')
const mainContent = document.querySelector('.main-content')
const form = document.getElementById('task-form')

document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large');
  if (form.style.display ==='none') {
    form.style.display ='block'
    form.classList.add('form-display')
    form.classList.remove('form-hide')
  } else {
    form.style.display = 'none'
    form.classList.add('form-hide')
    form.classList.remove('form-display')
  }
}

function taskDom() {
  const main = document.getElementById('toDoList');
  let list = document.createElement('ul');
  const taskDiv = document.createElement('div')
  const taskTitle = document.createElement('div');
  const taskDetails = document.createElement('div');
  const taskDate = document.createElement('div');
  const taskRight = document.createElement('div');
  const taskDelete = document.createElement('span');
  let item = document.createElement('li');
  taskDelete.id = 'delete';
  taskDelete.classList.add('delete');
  taskRight.classList.add('rightSide');
  taskTitle.id = 'title';
  taskTitle.classList.add('title');
  taskDate.id = 'date';
  taskDate.classList.add('date');
  taskDetails.id = 'details'
  taskDetails.classList.add('details');
  taskDiv.classList.add('taskContainer');
  main.appendChild(list);
  list.appendChild(item);
  item.appendChild(taskDiv)
  taskDiv.appendChild(taskTitle, taskDetails, taskRight);
  taskRight.appendChild(taskDate, taskDelete);

}
export default taskDom