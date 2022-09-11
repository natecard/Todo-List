import {lightFormat} from 'date-fns'

// window.localStorage.setItem('array', 'arrays');
// console.log(window.localStorage.getItem('array'))


let tasks = [];

function Todo (title, details, priority, dueDate){
  this.title = title;
  this.details = details;
  this.priority = priority;
  this.dueDate = function formatDate(date){
    date = lightFormat(new Date(2022, 9, 5), "yyyy, M, d");
    console.log(dueDate);
 }
  this.info = function pushToTasks(){
  tasks.push(new Todo);
 }
};

export {Todo};