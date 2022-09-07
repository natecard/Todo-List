import {Todo, Project} from './constructors.js'
import {taskDom} from './website.js';
taskDom()
function taskInput() {
let newTask = new Todo;
const tasks = [
  {
    title: 'Clean House',
    details: 'clean before guests come',
    priority: 'medium',
  },
  {
    title: 'Finish Homework',
    details: 'finish algebra',
    priority: 'medium',
  }
];
let newProject = new Project;

 const projectArray = [
  {
    title: 'Clean House',
    task: 'Clean House',
    dueDate: '2022, 9, 9',
    priority: 'high'
  }
 ]

const main = document.getElementById('toDoList');
const list = document.getElementsByClassName('taskItemList')
const taskDiv = document.getElementsByClassName('taskContainer')
const taskRight = document.getElementsByClassName('taskRight')
const taskTitle = document.getElementsByClassName('taskTitle');
const taskDetails = document.getElementsByClassName('taskDetails');
const taskDate = document.getElementsByClassName('taskDate');
const taskDelete = document.getElementsByTagName('span');
main.append(list);
taskDiv.appendChild(taskTitle, taskDetails, taskRight);
taskRight.appendChild(taskDate, taskDelete);
let item = document.createElement('li');
list.append(item);
item.append(taskDiv)



function displayTasks() {

tasks.forEach(function(newTask){
  tasks.push(newTask);
  taskTitle.innerHTML = newTask.title;
  taskDetails.innerHTML = newTask.details;
  taskDate.innerHTML = newTask.dueDate;
  taskDelete.innerHTML = '&times;'
  return newTask.title, newTask.details, newTask.dueDate
    })
  };

  console.log(tasks)
};
export default taskInput;