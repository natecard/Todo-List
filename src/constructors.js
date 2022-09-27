import {lightFormat} from 'date-fns'

// window.localStorage.setItem('array', 'arrays');
// console.log(window.localStorage.getItem('array'))

function Todo (title, details, priority, dueDate){
  this.title = title;
  this.details = details;
  this.priority = priority;
  this.dueDate = function formatDate(date){
    date = lightFormat(new Date(2022, 9, 5), "yyyy, M, d");
    console.log(dueDate);
 }
 return title, details, priority, dueDate
};
export {Todo};