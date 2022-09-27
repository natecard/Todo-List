import {Todo} from './constructors.js'
import {todoDom, hideSideBar} from './website.js';
todoDom()
hideSideBar()
let newTask = new Todo
let tasks = [
  {
  id: 1,
  title: 'Clean',
  details: 'Finish cleaning the house',
  dueDate: "2022, 9, 19"
},
{
  id: 2,
  title:'Homework',
  details:'Complete homework for the day',
  dueDate:"2022,9,22"
}
]
function taskRender() {
  tasks.forEach((task, index) => {
    let list = document.getElementById('taskList')
    let taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    let item = document.createElement('li');
    item.classList.add('taskDivList')
    let taskDivLeft = document.createElement('div');
    taskDivLeft.classList.add('taskDivLeft');
    let taskTitle = document.createElement('p');
    taskTitle.classList.add('taskTitle');
    let taskTitleText = document.createTextNode(`${task.title}`)
    let taskDetails = document.createElement('p')
    taskDetails.classList.add('taskDetails');
    let taskDetailsText = document.createTextNode(`${task.details}`)
    let taskDivRight = document.createElement('div');
    taskDivRight.classList.add('taskDivRight');
    let taskDueDate = document.createElement('div');
    taskDueDate.classList.add('taskDueDate');
    let taskDueDateText = document.createTextNode(`${task.dueDate}`)
    let taskDivDelete = document.createElement('span');
    taskDivDelete.classList.add('taskDelete')
    taskDivDelete.innerHTML = '&times;';
    console.log(taskTitleText.nodeValue)
    taskTitle.appendChild(taskTitleText)
    taskDetails.appendChild(taskDetailsText)
    taskDueDate.appendChild(taskDueDateText)
    taskDivRight.append(taskDivDelete, taskDueDate);
    taskDivLeft.append(taskTitle, taskDetails);
    taskContainer.append(taskDivLeft, taskDivRight)
    item.append(taskContainer);
    list.appendChild(item)

  })
}
export {taskRender, tasks};