import taskInput from './tasks.js'
import {hideSideBar,todoDom} from './website.js'
import _ from 'lodash';
import './style.css';

// if (!localStorage.getItem('tasks', 'projectArray')) {

// } else {
//   console.log('no storage')
// }
taskInput()
hideSideBar()
todoDom()
