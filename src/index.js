/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import callDom from './modules/dom';
import createPhoneMenu from './modules/phoneMenu';

callDom();

createPhoneMenu();

// DEFAULT ARRAYS

const allTasks = [];
const todayTasks = [];
const weekTasks = [];
const importantTasks = [];
const notesTasks = [];
const completedTasks = [];
const todos = document.querySelector('.todos');

const taskDoneButton = document.querySelector('.todo-setter-accept button');

// CONSTRUCTOR

function Task(title, details, project, date, importance) {
  this.title = title;
  this.details = details;
  this.project = project;
  this.date = date;
  this.importance = importance;
}

// ATTRIBUTE ADDER

function addAttribute() {
  const everyTask = todos.querySelectorAll('.task');

  for (let i = 0; i <= everyTask.length - 1; i++) {
    everyTask[i].setAttribute('data-card', [i]);
  }
}

// CONTENT ADDERS
// CONTENT ADDERS
// CONTENT ADDERS

function loopThroughtAll(num) {
  for (let i = num - 1; i < allTasks.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('task');
    const task = todos.querySelectorAll('.task');
    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[i].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('div')).classList.add('round');

    // ADDS TITLE AND CATEGORY

    const taskText = task[i].querySelector('.task-text');
    taskText.appendChild(document.createElement('div')).classList.add('task-heading');

    taskText.appendChild(document.createElement('div')).classList.add('task-category');

    const taskHeading = task[i].querySelector('.task-heading');
    taskHeading.appendChild(document.createElement('h2')).textContent = allTasks[i].title;

    const taskCategory = taskText.querySelector('.task-category');
    taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

    // ADDS TASK IMPORTANCE

    const taskImportance = task[i].querySelector('.task-importance');
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-regular', 'fa-star');

    addAttribute();
  }
}

function loopThroughtImportant(num) {
  for (let i = num - 1; i < importantTasks.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('task');
    const task = todos.querySelectorAll('.task');
    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[i].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('div')).classList.add('round');

    // ADDS TITLE AND CATEGORY

    const taskText = task[i].querySelector('.task-text');
    taskText.appendChild(document.createElement('div')).classList.add('task-heading');

    taskText.appendChild(document.createElement('div')).classList.add('task-category');

    const taskHeading = task[i].querySelector('.task-heading');
    taskHeading.appendChild(document.createElement('h2')).textContent = importantTasks[i].title;

    const taskCategory = taskText.querySelector('.task-category');
    taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

    // ADDS TASK IMPORTANCE

    const taskImportance = task[i].querySelector('.task-importance');
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-regular', 'fa-star');

    addAttribute();
  }
}

// CONTENT ADDERS END
// CONTENT ADDERS END
// CONTENT ADDERS END

// ARRAYS CREATOR
// ARRAYS CREATOR
// ARRAYS CREATOR

// ADDS CONTENT TO ALL CATEGORY

function addToAllTasks(title, details, project, date, importance) {
  allTasks.push(new Task(title, details, project, date, importance));

  loopThroughtAll(allTasks.length);
}

// ADDS CONTENT TO IMPORTANT CATEGORY

function addToImportant(title, details, project, date, importance) {
  importantTasks.push(new Task(title, details, project, date, importance));
}

// ARRAYS CREATOR END
// ARRAYS CREATOR END
// ARRAYS CREATOR END

taskDoneButton.addEventListener('click', (event) => {
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

    // SETTING TODOS INTO RIGHT ARRAY

    if (taskImportance.checked === true) {
      addToImportant(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value);
    }
    // REMOVES MENUS
    document.querySelector('.creator-menu').classList.remove('active-menu');
    document.querySelector('.todo-setter').classList.remove('active-todo-setter');
    // REMOVES ALL CONTENT FROM FORMS
    taskTitle.value = '';
    taskDetails.value = '';
    taskDate.value = '';
    taskImportance.checked = false;
  }

  console.log(allTasks);
});

// CREATES THE OPTIONS FOR SELECT INPUT
// CREATES THE OPTIONS FOR SELECT INPUT
// CREATES THE OPTIONS FOR SELECT INPUT

const selectInput = document.querySelector('#projects_input');
const allListOptions = [];
const listAcceptButton = document.querySelector('.project-setter-accept-button button');

listAcceptButton.addEventListener('click', (e) => {
  e.preventDefault();
  const listMenuOptions = document.querySelectorAll('.project-name h2');
  listMenuOptions.forEach((listOption) => {
    allListOptions.push(listOption.textContent);
  });

  allListOptions.forEach((optionText) => {
    const option = document.createElement('option');
    option.text = optionText;
    selectInput.appendChild(option);
  });
});

// IF THE USER CLICKS ON DIFFERENT CATEGORY, SHOW THE CONTENT

const importantSection = document.querySelector('.important');

importantSection.addEventListener('click', () => {
  todos.innerHTML = '';
  loopThroughtImportant(importantTasks.length);
});
