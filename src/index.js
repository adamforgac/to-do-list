/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import callDom from './modules/dom';
import createPhoneMenu from './modules/phoneMenu';

callDom();

createPhoneMenu();

const allTasks = [];
const todos = document.querySelector('.todos');

const taskDoneButton = document.querySelector('.todo-setter-accept button');

function Task(title, details, project, date, importance) {
  this.title = title;
  this.details = details;
  this.project = project;
  this.date = date;
  this.importance = importance;
}

function addAttribute() {
  const everyTask = todos.querySelectorAll('.task');

  for (let i = 0; i <= everyTask.length - 1; i++) {
    everyTask[i].setAttribute('data-card', [i]);
  }
}

function loopThroughtTasks(num) {
  for (let i = num - 1; i < allTasks.length; i++) {
    todos.appendChild(document.createElement('div')).classList.add('task');
    const task = todos.querySelectorAll('.task');
    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-category');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    addAttribute();
  }
}

function addToAllTasks(title, details, project, date, importance) {
  allTasks.push(new Task(title, details, project, date, importance));

  loopThroughtTasks(allTasks.length);
}

taskDoneButton.addEventListener('click', (event) => {
  // GET THE FORMS INFO
  // GET THE FORMS INFO

  event.preventDefault();
  const allTaskInputs = document.querySelectorAll('.todo-setter-form input');
  allTaskInputs.forEach((input) => {
    input.checkValidity();
    input.reportValidity();
  });
  const taskTitle = document.querySelector('.todo-setter-title-input input');
  const taskDetails = document.querySelector('.todo-setter-details-input textarea');
  const taskProjects = document.querySelector('.todo-setter-projects-input select');
  const taskDate = document.querySelector('.todo-setter-date-input input');
  const taskImportance = document.querySelector('.container input');

  if (taskTitle.value === '') {
    false;
  } else {
    addToAllTasks(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value);
    // REMOVES MENUS
    document.querySelector('.creator-menu').classList.remove('active-menu');
    document.querySelector('.todo-setter').classList.remove('active-todo-setter');
    // REMOVES ALL CONTENT FROM FORMS
    taskTitle.value = '';
    taskDetails.value = '';
    taskDate.value = '';
    taskImportance.checked = false;
  }
});
