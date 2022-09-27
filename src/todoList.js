import {todoDom} from './website.js'
import {tasks, taskRender} from './tasks.js'
import { bind } from 'file-loader';
todoDom()
const submitBtn = document.getElementById('addTask');
function taskInput(){
  submitBtn.addEventListener('click', function(e){
    e.preventDefault()
  });
  let taskFormTitle = document.getElementById('taskFormTitle').value;
  let taskFormDetails = document.getElementById('taskFormDetails').value;
  let formDueDate = document.getElementById('formDueDate').value;
  let taskFormPriority = document.querySelector('#taskFormPriority').value;

  // taskTitle.innerHTML = taskFormTitle;
  // taskDetails.innerHTML = taskFormDetails;s
  // taskPriority.innerHTML = taskFormPriority;
  // taskDueDate.innerHTML = formDueDate;
}

  // for (let i = 0; i < taskDeleteBtn.length; i++) {
  //   taskDeleteBtn[i].addEventListener('click', function(){
  //     console.log('delete')
  //   })
  // }
  document.addEventListener('click', function(event){
    if(event.target.matches('.taskDelete')){
      console.log('delete')
    }
    });



  document.addEventListener('DOMContentLoaded', ()=>{
    submitBtn.addEventListener('click', taskInput)
    document.querySelector('form').reset;
  })
// taskDivDelete.forEach((element) => {
//   element.addEventListener('click', (e)=>{
//     console.log('delete')
//   })
// });
export {taskInput}