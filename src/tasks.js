import {Todo, Project} from './constructors.js'
import {todoDom, menu} from './website.js';
todoDom()
menu()
function taskInput() {
let newTask = new Todo;
let newProject = new Project;
newTask.pushToProjects(projectArray)
const tasks = [
  {
    title: 'Clean House',
    details: 'clean before guests come',
    priority: 'medium'
  },
  {
    title: 'Finish Homework',
    details: 'finish algebra',
    priority: 'medium'
  }
];

 const projectArray = [
  {
    title: 'Clean House',
    task: 'Clean House',
    dueDate: '2022, 9, 9',
    priority: 'high'
  }
 ]

 const main = document.getElementById('toDoList');
 const list = document.querySelector('.taskItemList')
 const taskDiv = document.querySelector('.taskContainer')
 const taskRight = document.querySelector('.taskRight')
 const taskTitle = document.querySelector('.taskTitle');
 const taskDetails = document.querySelector('.taskDetails');
 const taskDate = document.querySelector('.taskDate');
 const taskDelete = document.getElementsByTagName('span');
 let item = document.createElement('li');
 main.append(list);
 list.appendChild(item);
 item.appendChild(taskDiv)
 taskDiv.appendChild(taskTitle, taskDetails, taskRight);
 taskRight.appendChild(taskDate, taskDelete);



 function displayTasks() {

   tasks.forEach(function(newTask){
     taskTitle.innerHTML = newTask.title.valueOf;
     taskDetails.innerHTML = newTask.details.valueOf;
     taskDate.innerHTML = newTask.dueDate.valueOf;
     taskDelete.innerHTML = '&times;'
    })
    console.log(projectArray)
  };
};
export default {taskInput};