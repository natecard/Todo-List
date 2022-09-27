import {taskInput} from './todoList.js'
import {taskRender} from './tasks.js'
import {hideSideBar,todoDom} from './website.js'
import _ from 'lodash';
import './style.css';

// if (!localStorage.getItem('tasks')) {

// } else {
//   console.log('no storage')
// }


// taskRemove()
taskRender()
taskInput()
hideSideBar()
todoDom()
