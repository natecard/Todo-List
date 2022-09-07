import {lightFormat} from 'date-fns'

function Todo (title, details, priority){
  this.title = title;
  this.details = details;
  this.priority = priority;
 };

function Project (title, task, priority,dueDate){
  this.title = title;
  this.task = [];
  this.addTask = function(task) {
    this.task.push(task)
  }
  this.priority = priority;
  this.dueDate = function formatDate(date){
    date = lightFormat(new Date(2022, 9, 5), "yyyy, M, d");
    date = dueDate
    console.log(dueDate);
}
}

export {Todo, Project};