import {Todo} from './constructors.js'
import {todoDom, hideSideBar} from './website.js';
todoDom()
hideSideBar()
let tasks = []
let newTask = new Todo;
function taskInput() {

  const main = document.getElementById('toDoList');
  const list = document.querySelector('.taskItemList');
  const taskDiv = document.querySelector('.taskContainer');
  const taskDivRight = document.querySelector('.taskRight');
  const taskDivTitle = document.querySelector('.taskTitle');
  const taskDivDetails = document.querySelector('.taskDetails');
  const taskDivDate = document.querySelector('.taskDate');
  const taskDivDelete = document.getElementsByTagName('span');
  let item = document.createElement('li');
  main.append(list);
  list.appendChild(item);
  item.appendChild(taskDiv);
  taskDiv.appendChild(taskDivTitle, taskDivDetails, taskDivRight);
  taskRight.appendChild(taskDivDate, taskDivDelete);

  document.getElementById('task-submit').addEventListener('click', function() {
    const taskTitle = document.getElementById('task-title').value;
    alert(taskTitle)
    taskTitle = taskDivTitle.innerHTML;
    const taskDetails = document.getElementById('task-details').value;
    taskDetails = taskDivDetails.innerHTML;
    const taskPriority = document.getElementById('task-priority').value;
    taskPriority = taskDivPriority
    taskDelete.innerHTML = '&times;'

  // (function displayTasks() {
    // tasks.forEach()
  //   for (let i = 0; i < tasks.length; i++) {
  //       taskDivTitle.valueOf = taskTitle.innerHTML;
  //       taskDivDetails.valueOf = taskDetails.innerHTML;
  //       taskDivPriority.valueOf = taskPriority.innerHTML
  //       taskDelete.innerHTML = '&times;'
  //     }
  //     console.log(tasks)
  //   })();
    })
};
export default {taskInput};