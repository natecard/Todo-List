// const LOCAL_STORAGE_TASK_KEY = 'todo.tasks'
// const LOCAL_STORAGE_SELECTED_TASK_ID_KEY = 'todo.selectedTaskId'
// let tasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TASK_KEY)) || []
// let selectedTaskId = localStorage.getItem(LOCAL_STORAGE_SELECTED_TASK_ID_KEY)

const LOCAL_STORAGE_LIST_KEY = 'task.projects'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedProjectId'
let projects = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedProjectId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY)

const submitBtn = document.getElementById('taskBtnCreate')
const newTaskInput = document.getElementById('newTaskAdd')
const newTaskForm = document.querySelector('[data-new-task-form]');
const taskList = document.getElementById('taskList');
const taskTemplate = document.getElementById('task-template')
const projectList = document.querySelector('[data-projects]')
const newListForm = document.querySelector('[data-new-project-form]')
const newListInput = document.querySelector('[data-new-project-input]')
const projectTitle = document.getElementById('projectTitle')
const tasksContainer = document.querySelector('[data-tasks]')
const deleteTaskBtn = document.getElementById('taskClear')
const deleteProjectBtn = document.getElementById('projectClear')

function saveProjects() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(projects))
  localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedProjectId)
}

projectList.addEventListener('click', e=> {
  if (e.target.tagName.toLowerCase() === 'li') {
    selectedProjectId = e.target.dataset.projectId
    saveAndRender()
  }
})

function createProject(title) {
  return {title: title, id: Date.now()*Math.random(), tasks: [] }
}
function createTask(name) {
  return { name: name, id: Date.now()*Math.random(), dueDate: dueDate, complete: false}
}

function saveAndRender() {
  saveProjects()
  render()
}

function renderTasks(selectedProject) {
  selectedProject.tasks.forEach(task => {
    const taskElement = document.importNode(taskTemplate.content, true)
    const checkbox = taskElement.querySelector('input');
    checkbox.id = task.id
    checkbox.checked = task.complete
    const label = taskElement.querySelector('label')
    label.htmlFor = task.id
    label.append(task.name)
    taskList.appendChild(taskElement)
  });
}

newListForm.addEventListener('submit', e=> {
  e.preventDefault()
  const projectName = newListInput.value
  if(projectName==null || projectName ==='') return
  const list = createProject(projectName)
  newListInput.value = null
  projects.push(list)
  saveAndRender()
})

deleteTaskBtn.addEventListener('click', e =>{
  const selectedProject = projects.find(project => project.id == selectedProjectId)
  selectedProject.tasks = selectedProject.tasks.filter(task => !task.complete)
  saveAndRender()
})

deleteProjectBtn.addEventListener('click', e =>{
  projects = projects.filter(project => project.id != selectedProjectId)
  selectedProjectId = null
  saveAndRender()
})

tasksContainer.addEventListener('click', e =>{
  if (e.target.tagName.toLowerCase() == 'input'){
    const selectedProject = projects.find(project => project.id == selectedProjectId)
    const selectedTask = selectedProject.tasks.find(task => task.id == e.target.id)
    selectedTask.complete = e.target.checked
    saveProjects()
  }
})

function renderProjects(){
  projects.forEach(project => {
    const listElement = document.createElement('li')
    listElement.dataset.projectId = project.id
    listElement.classList.add('project-title')
    listElement.innerText = project.title
    if (project.id == selectedProjectId) {
      listElement.classList.add('active-list')
    }
    projectList.appendChild(listElement)
  })
}

submitBtn.addEventListener('click', function(e) {
  e.preventDefault()
  let title = newTaskInput.value;
  // let dueDate = newTaskDate
  if (title == '' || title == null) return
  let task = createTask(title, dueDate)
  newTaskInput.value = null
  const selectedProject = projects.find(project => project.id == selectedProjectId)
  selectedProject.tasks.push(task)
  clearElement(taskList)
  renderTasks(selectedProject)
});

// document.addEventListener('DOMContentLoaded', () => {
//   submitBtn.addEventListener('click', () => {
//     document.querySelector('form').reset;
//   });
// })
function render() {
  clearElement(projectList)
  renderProjects()

  const selectedProject = projects.find(project => project.id == selectedProjectId);
  if (selectedProjectId == null) {
    taskList.style.display = 'none'
  } else {
    taskList.style.display = ''
    projectTitle.innerText = `Tasks for ${selectedProject.title}`
    clearElement(taskList)
    renderTasks(selectedProject)
  }
}


//DOM STUFF//

function hideSideBar() {
const sidebar = document.querySelector('.sidebar')
const mainContent = document.querySelector('.mainContent')
const dateDiv = document.getElementById('projectDiv')

document.querySelector('button').onclick = function () {
  sidebar.classList.toggle('sidebar_small');
  mainContent.classList.toggle('main-content_large');
  if (dateDiv.style.display ==='none') {
    dateDiv.style.display ='block'
    dateDiv.classList.add('formDisplay')
    dateDiv.classList.remove('formHide')
  } else {
    dateDiv.style.display = 'none'
    dateDiv.classList.add('formHide')
    dateDiv.classList.remove('formDisplay')
  }
  }
};
function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}
// function todoDom() {
//   let modal = document.getElementById('taskModal');
//   let taskButton = document.getElementById('modalBtn');
//   let taskClose = document.getElementsByClassName('close')[0];
//   taskButton.onclick = function() {
//     modal.style.display = 'block'
//     document.getElementById('formDueDate').valueAsDate = new Date();
//   };
//   taskClose.onclick = function() {
//     modal.style.display = 'none'
//   };
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = 'none'
//     }
//   }
// };
export {hideSideBar, saveAndRender}