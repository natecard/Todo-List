import {lightFormat} from 'date-fns'

let projectArray = [];
let tasks = [];

function Todo (title, details, priority){
  this.title = title;
  this.details = details;
  this.priority = priority;
  this.pushToTasks = function() {
    tasks.push(this)
  }
 };

function Project (title,dueDate){
  this.title = title;
  this.dueDate = function formatDate(date){
    date = lightFormat(new Date(2022, 9, 5), "yyyy, M, d");
    date = dueDate
    console.log(dueDate);
}
  this.pushToProjects = function() {
    projectArray.push(this)
    console.log('pushed')
  }
}

export {Todo, Project};