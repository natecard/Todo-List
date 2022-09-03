import Todo from './todo.js'
import taskDom from './website.js';

let newTask = new Todo;
const tasks = [
  {
    title: 'Clean House',
    details: 'clean before guests come',
    dueDate: '9/1/2022',
    priority: 'medium',
  },
  {
    title: 'Finish Homework',
    details: 'finish algebra',
    dueDate: 'next Thursday',
    priority: 'medium',
  }
];
tasks.push(newTask);
const main = document.getElementById('toDoList');
let list = document.createElement('ul');



function displayTasks() {
  taskDom()

  const taskTitle = document.getElementById('title');
  const taskDetails = document.getElementById('details');
  const taskDate = document.getElementById('date');
  const taskDelete = document.getElementsByTagName('span');
  for (let i=0; i<tasks.length; i++) {

    let item = document.createElement('li');
    taskTitle.innerHTML = newTask.title;
    taskDetails.innerHTML = newTask.details;
    taskDate.innerHTML = newTask.dueDate;
    taskDelete.innerHTML = 'X'
  }
  };
console.log(tasks)
export default displayTasks;