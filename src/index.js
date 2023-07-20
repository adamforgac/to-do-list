/* eslint-disable no-inner-declarations */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable no-alert */
/* eslint-disable no-lonely-if */
/* eslint-disable eqeqeq */
/* eslint-disable func-names */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-loop-func */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */

import callDom from './modules/dom';
import createPhoneMenu from './modules/phoneMenu';

const { isSameDay, parseISO, differenceInDays } = require('date-fns');

callDom();

createPhoneMenu();

// ALERT

const customAlert = document.querySelector('.custom-alert');
const alertSubheading = document.querySelector('.alert-subheading p');

function showAlert(msg) {
  const wrapper = document.querySelector('.wrapper');
  customAlert.classList.add('visible-error');
  alertSubheading.textContent = msg;

  wrapper.style.overflow = 'hidden';
  wrapper.style.filter = 'brightness(0.5)';
  wrapper.style.pointerEvents = 'none';
  document.querySelector('.todo-setter').style.pointerEvents = 'none';

  const audio = new Audio('/dist/audio/wrong-message.mp3');
  audio.play();
}

const alertButton = document.querySelector('.alert-button button');
alertButton.addEventListener('click', () => {
  wrapper.style.overflow = 'visible';
  wrapper.style.filter = 'brightness(1)';
  wrapper.style.pointerEvents = 'all';
  document.querySelector('.todo-setter').style.pointerEvents = 'all';
  customAlert.classList.remove('visible-error');
});

// DATE

window.onload = function () {
  const dateElement = document.querySelector('.board-date p');
  const currentDate = new Date();
  const days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  const formattedDate = `${days[currentDate.getDay()]}, ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
  dateElement.textContent = formattedDate;

  generateAllLists();
  updateOptions();
  checkEveryDate();
  prepareAll();

  const allNumbers = document.querySelectorAll('.project-count p');
  for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i].textContent = customListArrNumbers[i];
  }
};

// DEFAULT ARRAYS

function saveTodos() {
  localStorage.setItem('allTasks', JSON.stringify(allTasks));
  localStorage.setItem('importantTasks', JSON.stringify(importantTasks));
  localStorage.setItem('completedTasks', JSON.stringify(completedTasks));
  localStorage.setItem('allNotes', JSON.stringify(allNotes));
  localStorage.setItem('allLists', JSON.stringify(allLists));
  localStorage.setItem('currentArrNums', JSON.stringify(currentArrNums));
  localStorage.setItem('customListArrNumbers', JSON.stringify(customListArrNumbers));
  localStorage.setItem('customNumStorage', JSON.stringify(customNumStorage));
  localStorage.setItem('allTasksTitles', JSON.stringify(allTasksTitles));
  localStorage.setItem('allNotesTitles', JSON.stringify(allNotesTitles));
  localStorage.setItem('allListTitles', JSON.stringify(allListTitles));
}

const storedTodos = localStorage.getItem('allTasks');
const storedImportant = localStorage.getItem('importantTasks');
const storedCompleted = localStorage.getItem('completedTasks');
const storedNotes = localStorage.getItem('allNotes');
const storedLists = localStorage.getItem('allLists');
const storedArrNums = localStorage.getItem('currentArrNums');
const storedCustomNums = localStorage.getItem('customListArrNumbers');
const storedNumStorage = localStorage.getItem('customNumStorage');
const storedTaskTitles = localStorage.getItem('allTasksTitles');
const storedNoteTitles = localStorage.getItem('allNotesTitles');
const storedListTitles = localStorage.getItem('allListTitles');

let allTasks = storedTodos ? JSON.parse(storedTodos) : [];
let allTasksTitles = storedTaskTitles ? JSON.parse(storedTaskTitles) : [];
let allListTitles = storedListTitles ? JSON.parse(storedListTitles) : [];
let allNotesTitles = storedNoteTitles ? JSON.parse(storedNoteTitles) : [];
let todayTasksNi = [];
let todayTasksImp = [];
let weekTasksNi = [];
let currentArrNums = storedArrNums ? JSON.parse(storedArrNums) : [];
let weekTasksImp = [];
let importantTasks = storedImportant ? JSON.parse(storedImportant) : [];
let allNotes = storedNotes ? JSON.parse(storedNotes) : [];
let completedTasks = storedCompleted ? JSON.parse(storedCompleted) : [];
let allLists = storedLists ? JSON.parse(storedLists) : [];
let allListOptions = [];
let generateArray = [];
let notImportantDataCards = [];
let niDateAttributes = [];
let niWeekAttributes = [];
let impDateAttributes = [];
let impWeekAttributes = [];
let importantDataCards = [];
let generateArrayImportant = [];
let keyIndexCustom;
let customListArrNumbers = storedCustomNums ? JSON.parse(storedCustomNums) : [];
let customNumStorage = storedNumStorage ? JSON.parse(storedNumStorage) : [];

// BOARDS VARIABLES

const todos = document.querySelector('.todos');
const lists = document.querySelector('.projects');
const wrapper = document.querySelector('.wrapper');

// FORMS DONE BUTTONS

const taskDoneButton = document.querySelector('.todo-setter-accept button');
const taskEditButton = document.querySelector('.todo-editor-accept button');
const noteEditButton = document.querySelector('.note-editor-accept-button');
const startEditButton = document.querySelector('.fa-pen-to-square');
const noteDoneButton = document.querySelector('.note-setter-accept-button');
const listDoneButton = document.querySelector('.project-setter-accept-button');
const listRemovalButton = document.querySelector('.button-bar button');

// CATEGORY SMALL NUMBERS

const allCount = document.querySelector('.all-count p');
const importantCount = document.querySelector('.important-count p');
const notesCount = document.querySelector('.notes-count p');
const completedCount = document.querySelector('.completed-count p');
const todayCount = document.querySelector('.today-count p');
const weekCount = document.querySelector('.week-count p');

const selectInput = document.querySelector('#projects_input');
const selectInputEdit = document.querySelector('#projects_input_edit');
const selectInputRemoval = document.querySelector('#list-removal');
const categoryHeading = document.querySelector('.category-name h2');
const importantSection = document.querySelector('.important');
const allSection = document.querySelector('.all');
const completedSection = document.querySelector('.completed');
const notesSection = document.querySelector('.notes');
const todaySection = document.querySelector('.today');
const weekSection = document.querySelector('.week');

const mobileMenu = document.querySelector('.creator-menu-mobile');
const mobileTodoIcon = document.querySelector('.todo-create-mobile');
const mobileProjectIcon = document.querySelector('.project-create-mobile');
const mobileNoteIcon = document.querySelector('.note-create-mobile');
const todoPar = document.querySelector('.todo-create-mobile p');
const projectPar = document.querySelector('.project-create-mobile p');
const notePar = document.querySelector('.note-create-mobile p');

// CONSTRUCTORS

function Task(title, details, project, date, importance) {
  this.title = title;
  this.details = details;
  this.project = project;
  this.date = date;
  this.importance = importance;
}

function Note(title, details) {
  this.title = title;
  this.details = details;
}

function List(title, color) {
  this.title = title;
  this.color = color;
}

// FUNCTION FOR RETRIEVING CUSTOM ARRAY NUMBERS
// FUNCTION FOR RETRIEVING CUSTOM ARRAY NUMBERS
// FUNCTION FOR RETRIEVING CUSTOM ARRAY NUMBERS

function retrieveCustom() {
  customListArrNumbers = [];
  const allNums = document.querySelectorAll('.project-count p');
  for (let i = 0; i < allNums.length; i++) {
    customListArrNumbers.push(allNums[i].textContent);
  }
  saveTodos();
}

// UPDATES ARRAYS NUMBERS
// UPDATES ARRAYS NUMBERS
// UPDATES ARRAYS NUMBERS

function updateArrayNumbers() {
  const totalItems = allTasks.length + allNotes.length + importantTasks.length;
  allCount.textContent = totalItems;

  const totalImportant = importantTasks.length;
  importantCount.textContent = totalImportant;

  const totalNotes = allNotes.length;
  notesCount.textContent = totalNotes;

  const totalCompleted = completedTasks.length;
  completedCount.textContent = totalCompleted;

  const totalToday = todayTasksNi.length + todayTasksImp.length;
  todayCount.textContent = totalToday;

  const totalWeek = weekTasksImp.length + weekTasksNi.length;
  weekCount.textContent = totalWeek;

  saveTodos();
}

// FUNCTION THAT CHECKS FOR ALL DATES

function checkForDateNotImportant() {
  niDateAttributes = [];
  todayTasksNi = [];
  for (let i = 0; i < allTasks.length; i++) {
    const userDate = allTasks[i].date;
    const currentDate = new Date();
    const dueDate = parseISO(userDate);

    if (isSameDay(dueDate, currentDate)) {
      todayTasksNi.push(allTasks[i]);
      const dataCard = i;
      niDateAttributes.push(dataCard);
    }
  }
  updateArrayNumbers();
  setAttributeToBoard();
  saveTodos();
}

function loopAllDaysNotImportant() {
  for (let a = 0; a < todayTasksNi.length; a++) {
    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'not-important');
    const task = todos.querySelectorAll('.not-important');
    task[a].appendChild(document.createElement('div')).classList.add('task-status');
    task[a].appendChild(document.createElement('div')).classList.add('task-text');
    task[a].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[a].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[a].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'not-important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'not-important-round');

    // ADDS TITLE AND CATEGORY

    const taskText = task[a].querySelector('.task-text');
    taskText.appendChild(document.createElement('div')).classList.add('task-heading');

    taskText.appendChild(document.createElement('div')).classList.add('task-category');

    const taskHeading = task[a].querySelector('.task-heading');
    taskHeading.appendChild(document.createElement('h2')).textContent = todayTasksNi[a].title;

    const taskCategory = taskText.querySelector('.task-category');
    taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

    // ADDS TASK IMPORTANCE

    const taskImportance = task[a].querySelector('.task-importance');
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');
  }

  const everyNiTask = todos.querySelectorAll('.not-important');

  for (let c = 0; c < everyNiTask.length; c++) {
    everyNiTask[c].setAttribute('data-card', niDateAttributes[c]);
    const everyTaskChildren = everyNiTask[c].querySelectorAll('.task-status, .not-important-round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance');
    everyTaskChildren.forEach((child) => {
      child.setAttribute('data-card', niDateAttributes[c]);
    });
  }
  updateArrayNumbers();
  setAttributeToBoard();
}

function checkForWeekNotImportant() {
  niWeekAttributes = [];
  weekTasksNi = [];
  for (let i = 0; i < allTasks.length; i++) {
    const userDate = allTasks[i].date;
    const currentDate = new Date();
    const dueDate = parseISO(userDate);
    const difference = differenceInDays(dueDate, currentDate);

    if (difference < 8) {
      weekTasksNi.push(allTasks[i]);
      const dataCard = i;
      niWeekAttributes.push(dataCard);
    }
  }
  updateArrayNumbers();
  setAttributeToBoard();
  saveTodos();
}

function loopAllWeekNotImportant() {
  for (let a = 0; a < weekTasksNi.length; a++) {
    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'not-important');
    const task = todos.querySelectorAll('.not-important');
    task[a].appendChild(document.createElement('div')).classList.add('task-status');
    task[a].appendChild(document.createElement('div')).classList.add('task-text');
    task[a].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[a].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[a].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'not-important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'not-important-round');

    // ADDS TITLE AND CATEGORY

    const taskText = task[a].querySelector('.task-text');
    taskText.appendChild(document.createElement('div')).classList.add('task-heading');

    taskText.appendChild(document.createElement('div')).classList.add('task-category');

    const taskHeading = task[a].querySelector('.task-heading');
    taskHeading.appendChild(document.createElement('h2')).textContent = weekTasksNi[a].title;

    const taskCategory = taskText.querySelector('.task-category');
    taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

    // ADDS TASK IMPORTANCE

    const taskImportance = task[a].querySelector('.task-importance');
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');
  }

  const everyNiTask = todos.querySelectorAll('.not-important');

  for (let c = 0; c < everyNiTask.length; c++) {
    everyNiTask[c].setAttribute('data-card', niWeekAttributes[c]);
    const everyTaskChildren = everyNiTask[c].querySelectorAll('.task-status, .not-important-round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance');
    everyTaskChildren.forEach((child) => {
      child.setAttribute('data-card', niWeekAttributes[c]);
    });
  }
  updateArrayNumbers();
  setAttributeToBoard();
}

function checkForDateImportant() {
  impDateAttributes = [];
  todayTasksImp = [];
  for (let i = 0; i < importantTasks.length; i++) {
    const userDate = importantTasks[i].date;
    const currentDate = new Date();
    const dueDate = parseISO(userDate);
    if (isSameDay(dueDate, currentDate)) {
      todayTasksImp.push(importantTasks[i]);
      const dataCard = i;
      impDateAttributes.push(dataCard);
    }
  }
  updateArrayNumbers();
  setAttributeToBoard();
  saveTodos();
}

function loopAllDaysImportant() {
  for (let a = 0; a < todayTasksImp.length; a++) {
    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'important-task');
    const task = todos.querySelectorAll('.important-task');
    task[a].appendChild(document.createElement('div')).classList.add('task-status');
    task[a].appendChild(document.createElement('div')).classList.add('task-text');
    task[a].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[a].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[a].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'important-round');

    // ADDS TITLE AND CATEGORY

    const taskText = task[a].querySelector('.task-text');
    taskText.appendChild(document.createElement('div')).classList.add('task-heading');

    taskText.appendChild(document.createElement('div')).classList.add('task-category');

    const taskHeading = task[a].querySelector('.task-heading');
    taskHeading.appendChild(document.createElement('h2')).textContent = todayTasksImp[a].title;

    const taskCategory = taskText.querySelector('.task-category');
    taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

    // ADDS TASK IMPORTANCE

    const taskImportance = task[a].querySelector('.task-importance');
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');
  }

  const everyImportant = todos.querySelectorAll('.important-task');

  for (let c = 0; c < everyImportant.length; c++) {
    everyImportant[c].setAttribute('data-card', impDateAttributes[c]);
    const everyTaskChildren = everyImportant[c].querySelectorAll('.task-status, .round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance');
    everyTaskChildren.forEach((child) => {
      child.setAttribute('data-card', impDateAttributes[c]);
    });
  }
  setAttributeToBoard();
  updateArrayNumbers();
}

function checkForWeekImportant() {
  impWeekAttributes = [];
  weekTasksImp = [];
  for (let i = 0; i < importantTasks.length; i++) {
    const userDate = importantTasks[i].date;
    const currentDate = new Date();
    const dueDate = parseISO(userDate);
    const difference = differenceInDays(dueDate, currentDate);

    if (difference < 8) {
      weekTasksImp.push(importantTasks[i]);
      const dataCard = i;
      impWeekAttributes.push(dataCard);
    }
  }
  updateArrayNumbers();
  setAttributeToBoard();
  saveTodos();
}

function loopAllWeekImportant() {
  for (let a = 0; a < weekTasksImp.length; a++) {
    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'important-task');
    const task = todos.querySelectorAll('.important-task');
    task[a].appendChild(document.createElement('div')).classList.add('task-status');
    task[a].appendChild(document.createElement('div')).classList.add('task-text');
    task[a].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[a].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[a].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'important-round');

    // ADDS TITLE AND CATEGORY

    const taskText = task[a].querySelector('.task-text');
    taskText.appendChild(document.createElement('div')).classList.add('task-heading');

    taskText.appendChild(document.createElement('div')).classList.add('task-category');

    const taskHeading = task[a].querySelector('.task-heading');
    taskHeading.appendChild(document.createElement('h2')).textContent = weekTasksImp[a].title;

    const taskCategory = taskText.querySelector('.task-category');
    taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

    // ADDS TASK IMPORTANCE

    const taskImportance = task[a].querySelector('.task-importance');
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');
  }

  const everyImportant = todos.querySelectorAll('.important-task');

  for (let c = 0; c < everyImportant.length; c++) {
    everyImportant[c].setAttribute('data-card', impWeekAttributes[c]);
    const everyTaskChildren = everyImportant[c].querySelectorAll('.task-status, .round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance');
    everyTaskChildren.forEach((child) => {
      child.setAttribute('data-card', impWeekAttributes[c]);
    });
  }
  updateArrayNumbers();
  setAttributeToBoard();
}

function checkEveryDate() {
  updateArrayNumbers();
  checkForDateImportant();
  checkForDateNotImportant();
  checkForWeekImportant();
  checkForWeekNotImportant();
  setAttributeToBoard();
  saveTodos();
}

// ADDS / UPDATES ATTRIBUTE TO DIFFERENT CATEGORIES
// ADDS / UPDATES ATTRIBUTE TO DIFFERENT CATEGORIES
// ADDS / UPDATES ATTRIBUTE TO DIFFERENT CATEGORIES

function addTaskAttribute() {
  const everyTask = todos.querySelectorAll('.not-important');

  for (let i = 0; i <= everyTask.length - 1; i++) {
    everyTask[i].setAttribute('data-card', [i]);

    const everyTaskChildren = everyTask[i].querySelectorAll(
      '.task-status, .not-important-round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance',
    );

    everyTaskChildren.forEach((child) => {
      child.setAttribute('data-card', [i]);
    });
  }
}

function addNoteAttribute() {
  const everyNote = todos.querySelectorAll('.note');

  for (let i = 0; i <= everyNote.length - 1; i++) {
    everyNote[i].setAttribute('data-card', [i]);

    const everyImportantChildren = everyNote[i].querySelectorAll(
      '.note-status, .note-icon, .note-heading, .note-category, .note-heading h2, .note-category p, .note-text, .note-importance',
    );

    everyImportantChildren.forEach((child) => {
      child.setAttribute('data-card', [i]);
    });
  }
}

function addListAttribute() {
  const everyList = lists.querySelectorAll('.project-list');

  for (let i = 0; i <= everyList.length - 1; i++) {
    everyList[i].setAttribute('data-card', [i]);
  }
}

function addImportantAttribute() {
  const everyImportant = todos.querySelectorAll('.important-task');

  for (let i = 0; i <= everyImportant.length - 1; i++) {
    everyImportant[i].setAttribute('data-card', [i]);

    const everyImportantChildren = everyImportant[i].querySelectorAll(
      '.task-status, .round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance',
    );

    everyImportantChildren.forEach((child) => {
      child.setAttribute('data-card', [i]);
    });
  }
}

function addCompletedAttribute() {
  const everyCompleted = todos.querySelectorAll('.completed-task');

  for (let i = 0; i <= everyCompleted.length - 1; i++) {
    everyCompleted[i].setAttribute('data-card', [i]);

    const everyCompletedChildren = everyCompleted[i].querySelectorAll(
      '.task-status, .round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance',
    );

    everyCompletedChildren.forEach((child) => {
      child.setAttribute('data-card', [i]);
    });
  }
}

function addOptionAttribute() {
  const select = document.getElementById('projects_input');
  const options = select.querySelectorAll('.list-item');

  for (let i = 0; i < options.length; i++) {
    options[i].setAttribute('list-attribute', [i]);
  }
}

// SETS RIGHT ARRAYNUMBERS

// WHOLE CONTENT GENERATORS (UPDATES CLASSES AND ATTRIBUTES)
// WHOLE CONTENT GENERATORS (UPDATES CLASSES AND ATTRIBUTES)
// WHOLE CONTENT GENERATORS (UPDATES CLASSES AND ATTRIBUTES)

function generateImportant() {
  for (let i = 0; i < importantTasks.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'important-task');
    const task = todos.querySelectorAll('.important-task');

    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[i].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[i].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'important-round');

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
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');

    addImportantAttribute();
  }
  setAttributeToBoard();
}

function generateCompleted() {
  for (let i = 0; i < completedTasks.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'completed-task');
    const task = todos.querySelectorAll('.completed-task');

    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[i].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[i].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round');
    const checkIcon = task[i].querySelector('.check-icon');
    checkIcon.classList.add('round');

    const statusLabel = task[i].querySelector('.task-status label');

    checkIcon.style.display = 'block';
    statusLabel.style.animation = 'none';
    statusLabel.style.borderColor = '#5cb85c';
    statusLabel.style.backgroundColor = 'black';

    // ADDS TITLE AND CATEGORY

    const taskText = task[i].querySelector('.task-text');
    taskText.appendChild(document.createElement('div')).classList.add('task-heading');

    taskText.appendChild(document.createElement('div')).classList.add('task-category');

    const taskHeading = task[i].querySelector('.task-heading');
    taskHeading.appendChild(document.createElement('h2')).textContent = completedTasks[i].title;

    const taskCategory = taskText.querySelector('.task-category');
    taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

    // ADDS TASK IMPORTANCE

    const taskImportance = task[i].querySelector('.task-importance');
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');

    addCompletedAttribute();
  }
  setAttributeToBoard();
}

function generateAllTasks() {
  for (let i = 0; i < allTasks.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'not-important');
    const task = todos.querySelectorAll('.not-important');
    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[i].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[i].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'not-important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'not-important-round');

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
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');

    addTaskAttribute();
  }
  setAttributeToBoard();
}

function generateAllLists() {
  for (let i = 0; i < allLists.length; i++) {
    // CREATES THE MAIN SHAPE

    lists.appendChild(document.createElement('div')).classList.add('project-list');
    const projectList = lists.querySelectorAll('.project-list');

    projectList[i].appendChild(document.createElement('div')).classList.add('project-color');
    projectList[i].appendChild(document.createElement('div')).classList.add('project-name');
    projectList[i].appendChild(document.createElement('div')).classList.add('project-count');

    // ADDS COMPLETE CHECKBOX

    const projectColor = projectList[i].querySelector('.project-color');
    projectColor.appendChild(document.createElement('div'));
    const projectMark = projectList[i].querySelector('.project-color div');
    projectMark.style.backgroundColor = allLists[i].color;

    const projectName = projectList[i].querySelector('.project-name');
    projectName.appendChild(document.createElement('h2')).textContent = allLists[i].title;

    const projectCount = projectList[i].querySelector('.project-count');
    projectCount.appendChild(document.createElement('p')).textContent = 0;

    addListAttribute();
  }
  addArrNums();
  setAttributeToBoard();
}

function generateAllNotes() {
  for (let i = 0; i < allNotes.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('note', 'item');
    const item = todos.querySelectorAll('.note');

    item[i].appendChild(document.createElement('div')).classList.add('note-status');
    item[i].appendChild(document.createElement('div')).classList.add('note-text');
    item[i].appendChild(document.createElement('div')).classList.add('note-importance');

    // ADDS COMPLETE CHECKBOX

    const itemStatus = item[i].querySelector('.note-status');
    itemStatus.appendChild(document.createElement('div')).classList.add('note-icon');

    const noteIcon = item[i].querySelector('.note-icon');
    noteIcon.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-note-sticky');

    // ADDS TITLE AND CATEGORY

    const itemText = item[i].querySelector('.note-text');
    itemText.appendChild(document.createElement('div')).classList.add('note-heading');

    itemText.appendChild(document.createElement('div')).classList.add('note-category');

    const itemHeading = item[i].querySelector('.note-heading');
    itemHeading.appendChild(document.createElement('h2')).textContent = allNotes[i].title;

    const itemCategory = itemText.querySelector('.note-category');
    itemCategory.appendChild(document.createElement('p')).textContent = 'Notes';

    addNoteAttribute();
  }
}

function setAttributeToBoard() {
  const allItems = document.querySelectorAll('.item');
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].setAttribute('data-item', `${i}`);
  }
}

function generateCustom(projectName) {
  generateArray = [];
  notImportantDataCards = [];
  importantDataCards = [];
  generateArrayImportant = [];
  for (let a = 0; a < allTasks.length; a++) {
    const originalText = allTasks[a].project;
    const customizedText = originalText.replace(/[ .]/g, '');
    if (customizedText === projectName) {
      generateArray.push(allTasks[a]);
      const dataCardNi = a;
      notImportantDataCards.push(dataCardNi);
    }
  }

  for (let b = 0; b < importantTasks.length; b++) {
    const originalText = importantTasks[b].project;
    const customizedText = originalText.replace(/[ .]/g, '');
    if (customizedText === projectName) {
      generateArrayImportant.push(importantTasks[b]);
      const dataCardImp = b;
      importantDataCards.push(dataCardImp);
    }
  }

  function generateNotImportantInner() {
    for (let i = 0; i < generateArray.length; i++) {
      todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'not-important');
      const task = todos.querySelectorAll('.not-important');
      task[i].appendChild(document.createElement('div')).classList.add('task-status');
      task[i].appendChild(document.createElement('div')).classList.add('task-text');
      task[i].appendChild(document.createElement('div')).classList.add('task-importance');

      // ADDS COMPLETE CHECKBOX

      const taskStatus = task[i].querySelector('.task-status');
      taskStatus.appendChild(document.createElement('label'));

      const taskLabel = task[i].querySelector('.task-status label');
      taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

      taskLabel.classList.add('round', 'not-important-round');
      const checkIcon = document.querySelector('.check-icon');
      checkIcon.classList.add('round', 'not-important-round');

      // ADDS TITLE AND CATEGORY

      const taskText = task[i].querySelector('.task-text');
      taskText.appendChild(document.createElement('div')).classList.add('task-heading');

      taskText.appendChild(document.createElement('div')).classList.add('task-category');

      const taskHeading = task[i].querySelector('.task-heading');
      taskHeading.appendChild(document.createElement('h2')).textContent = generateArray[i].title;

      const taskCategory = taskText.querySelector('.task-category');
      taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

      // ADDS TASK IMPORTANCE

      const taskImportance = task[i].querySelector('.task-importance');
      taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');

      // GIVES THE RIGHT ATTRIBUTE
    }

    const everyNiTask = todos.querySelectorAll('.not-important');

    for (let c = 0; c < everyNiTask.length; c++) {
      everyNiTask[c].setAttribute('data-card', notImportantDataCards[c]);
      const everyTaskChildren = everyNiTask[c].querySelectorAll('.task-status, .not-important-round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance');
      everyTaskChildren.forEach((child) => {
        child.setAttribute('data-card', notImportantDataCards[c]);
      });
    }
    setAttributeToBoard();
  }

  function generateImportantInner() {
    for (let i = 0; i < generateArrayImportant.length; i++) {
      // CREATES THE MAIN SHAPE

      todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'important-task');
      const task = todos.querySelectorAll('.important-task');

      task[i].appendChild(document.createElement('div')).classList.add('task-status');
      task[i].appendChild(document.createElement('div')).classList.add('task-text');
      task[i].appendChild(document.createElement('div')).classList.add('task-importance');

      // ADDS COMPLETE CHECKBOX

      const taskStatus = task[i].querySelector('.task-status');
      taskStatus.appendChild(document.createElement('label'));

      const taskLabel = task[i].querySelector('.task-status label');
      taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

      taskLabel.classList.add('round', 'not-important-round');
      const checkIcon = document.querySelector('.check-icon');
      checkIcon.classList.add('round', 'not-important-round');

      // ADDS TITLE AND CATEGORY

      const taskText = task[i].querySelector('.task-text');
      taskText.appendChild(document.createElement('div')).classList.add('task-heading');

      taskText.appendChild(document.createElement('div')).classList.add('task-category');

      const taskHeading = task[i].querySelector('.task-heading');
      taskHeading.appendChild(document.createElement('h2')).textContent = generateArrayImportant[i].title;

      const taskCategory = taskText.querySelector('.task-category');
      taskCategory.appendChild(document.createElement('p')).textContent = 'Tasks';

      // ADDS TASK IMPORTANCE

      const taskImportance = task[i].querySelector('.task-importance');
      taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');
    }

    const everyImportant = todos.querySelectorAll('.important-task');

    for (let c = 0; c < everyImportant.length; c++) {
      everyImportant[c].setAttribute('data-card', importantDataCards[c]);
      const everyTaskChildren = everyImportant[c].querySelectorAll('.task-status, .round, .fa-star, .task-heading, .task-category, .task-heading h2, .task-category p, .task-text, .task-importance');
      everyTaskChildren.forEach((child) => {
        child.setAttribute('data-card', importantDataCards[c]);
      });
    }
  }

  generateImportantInner();
  generateNotImportantInner();
  setAttributeToBoard();
}

// FUNCTIONS FOR PREPARING DIFFERENT SECTIONS
// FUNCTIONS FOR PREPARING DIFFERENT SECTIONS
// FUNCTIONS FOR PREPARING DIFFERENT SECTIONS

function prepareAll() {
  moveBackgroundLeft();
  todos.innerHTML = '';
  generateImportant();
  generateAllTasks();
  generateAllNotes();
  checkEveryDate();

  updateArrayNumbers();
  setAttributeToBoard();
  categoryHeading.textContent = 'All Entries';
  saveTodos();
}

function addArrNums() {
  let futureArrNums = document.querySelectorAll('.project-count p');
  for (let i = 0; i < futureArrNums.length; i++) {
    futureArrNums[i].textContent = currentArrNums[i];
  }

  futureArrNums = [];
  currentArrNums = [];
  saveTodos();
}

function prepareLists() {
  currentArrNums = [];
  const allNums = document.querySelectorAll('.project-count p');
  for (let i = 0; i < allNums.length; i++) {
    currentArrNums.push(allNums[i].textContent);
  }
  lists.innerHTML = '';
  generateAllLists();
  setAttributeToBoard();
  saveTodos();
}

function prepareListsRemoval() {
  currentArrNums = [];
  const allNums = document.querySelectorAll('.project-count p');
  for (let i = 0; i < allNums.length; i++) {
    currentArrNums.push(allNums[i].textContent);
  }
  currentArrNums.splice(keyIndexCustom, 1);
  lists.innerHTML = '';
  generateAllLists();
  setAttributeToBoard();
  saveTodos();
}

function prepareWithoutName() {
  todos.innerHTML = '';
  generateImportant();
  generateAllTasks();
  generateAllNotes();
  generateCompleted();
  checkEveryDate();

  updateArrayNumbers();
  setAttributeToBoard();
  saveTodos();
}

function prepareImportant() {
  todos.innerHTML = '';
  generateImportant();
  checkEveryDate();

  updateArrayNumbers();
  setAttributeToBoard();
  categoryHeading.textContent = 'Important Tasks';
  saveTodos();
}

function prepareNotes() {
  todos.innerHTML = '';
  generateAllNotes();
  checkEveryDate();

  setAttributeToBoard();
  updateArrayNumbers();
  categoryHeading.textContent = 'All Notes';
  saveTodos();
}

function prepareCompleted() {
  todos.innerHTML = '';
  generateCompleted();
  checkEveryDate();

  for (let i = 0; i < completedTasks.length; i++) {
    if (completedTasks[i].importance === 'important') {
      const task = todos.querySelectorAll('.completed-task');

      task[i].querySelector('.fa-star').style.color = 'yellow';
    }
  }

  updateArrayNumbers();
  setAttributeToBoard();
  categoryHeading.textContent = 'Completed Tasks';
  saveTodos();
}

// CLOSES THE PART WITH DETAILS

function closeDetails() {
  const taskDetails = document.querySelector('.task-details');
  setTimeout(() => {
    wrapper.classList.remove('details');
  }, 250);
  taskDetails.classList.remove('active-task-details');
  const mobileAdder = document.querySelector('.mobile-adder');
  mobileAdder.style.display = 'flex';
  saveTodos();
}

// GENERATES THE CONTENT FOR DIFFERENT CATEGORIES

importantSection.addEventListener('click', () => {
  removeBackground();
  prepareImportant();
  closeDetails();
});

// ADDS CONTENT TO TODAY SECTION

todaySection.addEventListener('click', () => {
  moveBackgroundRight();
  todos.innerHTML = '';
  closeDetails();
  checkEveryDate();
  loopAllDaysImportant();
  loopAllDaysNotImportant();
  categoryHeading.textContent = 'Today\'s Tasks';
});

// ADDS CONTENT TO WEEK SECTION

weekSection.addEventListener('click', () => {
  removeBackground();
  todos.innerHTML = '';
  closeDetails();
  checkEveryDate();
  loopAllWeekImportant();
  loopAllWeekNotImportant();
  categoryHeading.textContent = 'Week\'s Tasks';
});

// ADDS CONTENT TO ALL

allSection.addEventListener('click', () => {
  moveBackgroundLeft();
  prepareAll();
  closeDetails();
});

// ADDS CONTENT TO COMPLETED SECTION

completedSection.addEventListener('click', () => {
  removeBackground();
  prepareCompleted();
  closeDetails();
});

// ADDS CONTENT TO NOTES SECTION

notesSection.addEventListener('click', () => {
  removeBackground();
  prepareNotes();
  closeDetails();
});

// ADDS CONTENT TO CUSTOM LISTS

// ADDS CONTENT ITEM
// ADDS CONTENT ITEM
// ADDS CONTENT ITEM

function loopThroughtTasks(num) {
  for (let i = num - 1; i < allTasks.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'not-important');
    const task = todos.querySelectorAll('.not-important');

    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[i].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[i].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'not-important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'not-important-round');

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
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');

    updateArrayNumbers();

    addTaskAttribute();
  }
}

function loopThroughtNotes(num) {
  for (let i = num - 1; i < allNotes.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('note', 'item');
    const item = todos.querySelectorAll('.note');

    item[i].appendChild(document.createElement('div')).classList.add('note-status');
    item[i].appendChild(document.createElement('div')).classList.add('note-text');
    item[i].appendChild(document.createElement('div')).classList.add('note-importance');

    // ADDS COMPLETE CHECKBOX

    const itemStatus = item[i].querySelector('.note-status');
    itemStatus.appendChild(document.createElement('div')).classList.add('note-icon');

    const noteIcon = item[i].querySelector('.note-icon');
    noteIcon.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-note-sticky');

    // ADDS TITLE AND CATEGORY

    const itemText = item[i].querySelector('.note-text');
    itemText.appendChild(document.createElement('div')).classList.add('note-heading');

    itemText.appendChild(document.createElement('div')).classList.add('note-category');

    const itemHeading = item[i].querySelector('.note-heading');
    itemHeading.appendChild(document.createElement('h2')).textContent = allNotes[i].title;

    const itemCategory = itemText.querySelector('.note-category');
    itemCategory.appendChild(document.createElement('p')).textContent = 'Notes';

    updateArrayNumbers();

    addNoteAttribute();
  }
}

function loopThroughtLists(num) {
  for (let i = num - 1; i < allLists.length; i++) {
    // CREATES THE MAIN SHAPE

    lists.appendChild(document.createElement('div')).classList.add('project-list');
    const projectList = lists.querySelectorAll('.project-list');

    projectList[i].appendChild(document.createElement('div')).classList.add('project-color');
    projectList[i].appendChild(document.createElement('div')).classList.add('project-name');
    projectList[i].appendChild(document.createElement('div')).classList.add('project-count');

    // ADDS COMPLETE CHECKBOX

    const projectColor = projectList[i].querySelector('.project-color');
    projectColor.appendChild(document.createElement('div'));
    const projectMark = projectList[i].querySelector('.project-color div');
    projectMark.style.backgroundColor = allLists[i].color;

    const projectName = projectList[i].querySelector('.project-name');
    projectName.appendChild(document.createElement('h2')).textContent = allLists[i].title;

    const projectCount = projectList[i].querySelector('.project-count');
    projectCount.appendChild(document.createElement('p')).textContent = 0;

    addListAttribute();
  }
}

function loopThroughtImportant(num) {
  for (let i = num - 1; i < importantTasks.length; i++) {
    // CREATES THE MAIN SHAPE

    todos.appendChild(document.createElement('div')).classList.add('task', 'item', 'important-task');
    const task = todos.querySelectorAll('.important-task');
    task[i].appendChild(document.createElement('div')).classList.add('task-status');
    task[i].appendChild(document.createElement('div')).classList.add('task-text');
    task[i].appendChild(document.createElement('div')).classList.add('task-importance');

    // ADDS COMPLETE CHECKBOX

    const taskStatus = task[i].querySelector('.task-status');
    taskStatus.appendChild(document.createElement('label'));

    const taskLabel = task[i].querySelector('.task-status label');
    taskLabel.appendChild(document.createElement('div')).classList.add('check-icon');

    taskLabel.classList.add('round', 'important-round');
    const checkIcon = document.querySelector('.check-icon');
    checkIcon.classList.add('round', 'important-round');

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
    taskImportance.appendChild(document.createElement('i')).classList.add('fa-solid', 'fa-star');

    updateArrayNumbers();

    addImportantAttribute();
  }
}

// ADDS INFO TO RIGHT ARRAY
// ADDS INFO TO RIGHT ARRAY
// ADDS INFO TO RIGHT ARRAY

function addToAllTasks(title, details, project, date, importance, phoneImportance) {
  allTasks.push(new Task(title, details, project, date, importance, phoneImportance));
  saveTodos();
  loopThroughtTasks(allTasks.length);
  allTasksTitles = [];
}

function addToAllNotes(title, details) {
  allNotes.push(new Note(title, details));
  saveTodos();
  loopThroughtNotes(allNotes.length);
}

function addToImportant(title, details, project, date, importance, phoneImportance) {
  importantTasks.push(new Task(title, details, project, date, importance, phoneImportance));
  saveTodos();
  loopThroughtImportant(importantTasks.length);
  allTasksTitles = [];
}

function addToAllLists(title, color) {
  allLists.push(new List(title, color));
  loopThroughtLists(allLists.length);
  saveTodos();
  allListTitles = [];
}

// ACTIONS THAT HAPPEN RIGHT AFTER CLICKING THE BUTTON
// ACTIONS THAT HAPPEN RIGHT AFTER CLICKING THE BUTTON
// ACTIONS THAT HAPPEN RIGHT AFTER CLICKING THE BUTTON

taskDoneButton.addEventListener('click', (event) => {
  event.preventDefault();

  body.classList.remove('menu-active');

  const mobileMenu = document.querySelector('.creator-menu-mobile');

  mobileMenu.classList.remove('active-menu-mobile');

  document.querySelector('.mobile-adder i').classList.remove('rotated');

  mobileTodoIcon.classList.remove('active-todo-mobile');
  mobileProjectIcon.classList.remove('active-project-mobile');
  mobileNoteIcon.classList.remove('active-note-mobile');

  todoPar.classList.remove('options-appear');
  projectPar.classList.remove('options-appear');
  notePar.classList.remove('options-appear');

  // SWITCHES TO ALL SECTION
  prepareAll();

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
  const taskImportancePhone = document.querySelector('.container-phone input');

  function removeMenu() {
    document.querySelector('.creator-menu').classList.remove('active-menu');
    document.querySelector('.todo-setter').classList.remove('active-todo-setter');
    // REMOVES ALL CONTENT FROM FORMS
    taskTitle.value = '';
    taskDetails.value = '';
    taskDate.value = '';
    taskImportance.checked = false;
    taskImportancePhone.checked = false;
  }

  // TAKES LIST NAME IF NOT EMPTY

  function updateCustomNums(num) {
    const allProjectLists = document.querySelectorAll('.project-list');

    const projectCount = allProjectLists[num].querySelector('.project-count p').textContent;

    const projectNum = Number(projectCount);

    const addedNum = projectNum + 1;

    allProjectLists[num].querySelector('.project-count p').textContent = addedNum;
  }

  if (taskTitle.value === '') {
    false;
  } else {
    // SETTING TODOS INTO RIGHT ARRAY
    if ((taskImportance.checked === true) || (taskImportancePhone.checked === true)) {
      taskImportance.value = 'important';
      taskImportancePhone.value = 'important';
      const userDate = taskDate.value;
      const currentDate = new Date();
      const dueDate = parseISO(userDate);
      const difference = differenceInDays(dueDate, currentDate);
      if (difference < 0) {
        showAlert('The due date is older than the current date.');
      } else {
        if (allTasksTitles.length > 0) {
          const titleValue = taskTitle.value;
          if (allTasksTitles.some((item) => item === titleValue)) {
            showAlert('This task already exists.');
          } else {
            if (taskProjects.value !== 'none') {
              const chosenProject = taskProjects.value;
              const customizedProject = chosenProject.replace(/\s/g, '');

              for (let i = 0; i < allLists.length; i++) {
                const listTitle = allLists[i].title;
                const customizedTitle = listTitle.replace(/\s/g, '');

                if (customizedTitle === customizedProject) {
                  const arrNum = i;
                  updateCustomNums(arrNum);
                  break;
                }
              }
            }
            addToImportant(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value);
            for (let i = 0; i < importantTasks.length; i++) {
              allTasksTitles.push(importantTasks[i].title);
            }
            for (let i = 0; i < allTasks.length; i++) {
              allTasksTitles.push(allTasks[i].title);
            }
            checkEveryDate();
            updateArrayNumbers();
            removeMenu();
          }
        } else {
          if (taskProjects.value !== 'none') {
            const chosenProject = taskProjects.value;
            const customizedProject = chosenProject.replace(/\s/g, '');

            for (let i = 0; i < allLists.length; i++) {
              const listTitle = allLists[i].title;
              const customizedTitle = listTitle.replace(/\s/g, '');

              if (customizedTitle === customizedProject) {
                const arrNum = i;
                updateCustomNums(arrNum);
                break;
              }
            }
          }
          addToImportant(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value, taskImportancePhone.value);
          for (let i = 0; i < importantTasks.length; i++) {
            allTasksTitles.push(importantTasks[i].title);
          }
          for (let i = 0; i < allTasks.length; i++) {
            allTasksTitles.push(allTasks[i].title);
          }
          checkEveryDate();
          updateArrayNumbers();
          removeMenu();
        }
      }
    } else if ((taskImportance.checked === false) || (taskImportancePhone.checked === false)) {
      taskImportance.value = 'not-important';
      taskImportancePhone.value = 'not-important';
      const userDate = taskDate.value;
      const currentDate = new Date();
      const dueDate = parseISO(userDate);
      const difference = differenceInDays(dueDate, currentDate);
      if (difference < 0) {
        showAlert('The due date is older than the current date.');
      } else {
        if (allTasksTitles.length > 0) {
          const titleValue = taskTitle.value;
          if (allTasksTitles.some((item) => item === titleValue)) {
            showAlert('This task already exists.');
          } else {
            if (taskProjects.value !== 'none') {
              const chosenProject = taskProjects.value;
              const customizedProject = chosenProject.replace(/\s/g, '');

              for (let i = 0; i < allLists.length; i++) {
                const listTitle = allLists[i].title;
                const customizedTitle = listTitle.replace(/\s/g, '');

                if (customizedTitle === customizedProject) {
                  const arrNum = i;
                  updateCustomNums(arrNum);
                  break;
                }
              }
            }
            addToAllTasks(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value, taskImportancePhone.value);
            for (let i = 0; i < importantTasks.length; i++) {
              allTasksTitles.push(importantTasks[i].title);
            }
            for (let i = 0; i < allTasks.length; i++) {
              allTasksTitles.push(allTasks[i].title);
            }
            checkEveryDate();
            updateArrayNumbers();
            removeMenu();
          }
        } else {
          if (taskProjects.value !== 'none') {
            const chosenProject = taskProjects.value;
            const customizedProject = chosenProject.replace(/\s/g, '');

            for (let i = 0; i < allLists.length; i++) {
              const listTitle = allLists[i].title;
              const customizedTitle = listTitle.replace(/\s/g, '');

              if (customizedTitle === customizedProject) {
                const arrNum = i;
                updateCustomNums(arrNum);
                break;
              }
            }
          }
          addToAllTasks(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value, taskImportancePhone.value);
          for (let i = 0; i < importantTasks.length; i++) {
            allTasksTitles.push(importantTasks[i].title);
          }
          for (let i = 0; i < allTasks.length; i++) {
            allTasksTitles.push(allTasks[i].title);
          }
          checkEveryDate();
          updateArrayNumbers();
          removeMenu();
        }
      }
    }
  }
  retrieveCustom();
});

// FUNCTION FOR DISABLING POINTER EVENTS

function disablePointerEvents() {
  const wrapper = document.querySelector('.wrapper');
  wrapper.classList.add('disable-pointer-events');
  setTimeout(() => {
    wrapper.classList.remove('disable-pointer-events');
  }, 1500);
}

function animateUp(num) {
  const allItems = document.querySelectorAll('.item');

  console.log(num);

  for (let i = 0; i < allItems.length; i++) {
    if (i > num) {
      allItems[i].classList.add('animate-up');
      setTimeout(() => {
        allItems[i].classList.remove('animate-up');
      }, 1500);
    }
  }
}

function animateDownNi(num) {
  const allItems = document.querySelectorAll('.item');
  const itemsBeforeFirst = [];

  for (let i = 0; i < allItems.length; i++) {
    if (i < num) {
      const dataItem = document.querySelector(`[data-item="${i}"]`);
      if (dataItem.classList.contains('not-important')) {
        itemsBeforeFirst.push(i);
      }
    }
  }

  const taskMeasure = document.querySelector('.task');
  const taskHeight = taskMeasure.clientHeight;

  let mathMove = ((itemsBeforeFirst.length * taskHeight) + (itemsBeforeFirst.length * 6));

  if (window.innerWidth <= 1200) {
    mathMove = ((itemsBeforeFirst.length * taskHeight) + (itemsBeforeFirst.length * 5));
  }

  if (window.innerWidth <= 500) {
    mathMove = ((itemsBeforeFirst.length * taskHeight) + (itemsBeforeFirst.length * 11));
  }

  const dataItem = document.querySelector(`[data-item="${num}"]`);
  dataItem.style.transform = `translateY(-${mathMove}px)`;
  setTimeout(() => {
    dataItem.style.transform = 'translateY(0)';
  }, 1500);

  for (let i = 0; i < allItems.length; i++) {
    if (i < num) {
      const dataItem = document.querySelector(`[data-item="${i}"]`);
      if (dataItem.classList.contains('not-important')) {
        allItems[i].classList.add('animate-down');
        setTimeout(() => {
          allItems[i].classList.remove('animate-down');
        }, 1500);
      }
    }
  }
}

function animateDownImp(num) {
  const allItems = document.querySelectorAll('.item');
  const itemsBeforeFirst = [];

  for (let i = 0; i < allItems.length; i++) {
    const dataItem = document.querySelector(`[data-item="${i}"]`);
    if (i > num) {
      if (!dataItem.classList.contains('note')) {
        itemsBeforeFirst.push(i);
      }
    }
  }

  const taskMeasure = document.querySelector('.task');
  const taskHeight = taskMeasure.clientHeight;

  let mathMove = ((itemsBeforeFirst.length * taskHeight) + (itemsBeforeFirst.length * 6));

  if (window.innerWidth <= 1200) {
    mathMove = ((itemsBeforeFirst.length * taskHeight) + (itemsBeforeFirst.length * 5));
  }

  if (window.innerWidth <= 500) {
    mathMove = ((itemsBeforeFirst.length * taskHeight) + (itemsBeforeFirst.length * 11));
  }

  const dataItem = document.querySelector(`[data-item="${num}"]`);
  dataItem.style.transform = `translateY(${mathMove}px)`;
  setTimeout(() => {
    dataItem.style.transform = 'translateY(0)';
  }, 1500);

  for (let i = 0; i < allItems.length; i++) {
    if (i > num && !allItems[i].classList.contains("note")) {
      allItems[i].classList.add('animate-up');
      setTimeout(() => {
        allItems[i].classList.remove('animate-up');
      }, 1500);
    }
  }
}

// EDITS THE TASK
// EDITS THE TASK
// EDITS THE TASK

const task = {};

function taskEditor(originalTitle, originalDetails, originalDueDate, originalImportance, originalProject, originalStatus) {
  task.title = originalTitle;
  task.details = originalDetails;
  task.dueDate = originalDueDate;
  task.importance = originalImportance;
  task.project = originalProject;
  task.status = originalStatus;

  taskEditButton.addEventListener('click', (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    // SWITCHES TO ALL SECTION
    prepareAll();

    const allTaskInputs = document.querySelectorAll('.todo-editor-form input');
    allTaskInputs.forEach((input) => {
      input.checkValidity();
      input.reportValidity();
    });
    const taskTitle = document.querySelector('.todo-editor-title-input input');
    const taskDetails = document.querySelector('.todo-editor-details-input textarea');
    const taskProject = document.querySelector('.todo-editor-projects-input select');
    const taskDate = document.querySelector('.todo-editor-date-input input');
    const taskImportance = document.querySelector('.container-edit input');
    const taskImportancePhone = document.querySelector('.container-edit-phone input');

    function removeMenu() {
      document.querySelector('.creator-menu').classList.remove('active-menu');
      document.querySelector('.todo-editor').classList.remove('active-todo-editor');
      // REMOVES ALL CONTENT FROM FORMS
      taskTitle.value = '';
      taskDetails.value = '';
      taskDate.value = '';
      taskImportance.checked = false;
      taskImportancePhone.checked = false;
    }

    // ADDS ONE TO CHOSEN PROJECT

    function updateCustomNums(num) {
      const allProjectLists = document.querySelectorAll('.project-list');
      const projectCount = allProjectLists[num].querySelector('.project-count p').textContent;
      const projectNum = Number(projectCount);
      const addedNum = projectNum + 1;
      allProjectLists[num].querySelector('.project-count p').textContent = addedNum;
    }

    function changeStatsNi(num) {
      allTasks[num].title = taskTitle.value;
      allTasks[num].details = taskDetails.value;
      allTasks[num].date = taskDate.value;

      if (task.project === 'All Entries' && taskProject.value === 'none') {
        allTasks[num].project = 'none';
      } else if (task.project === 'All Entries' && taskProject.value !== 'none') {
        allTasks[num].project = taskProject.value;
        const customizedProject = taskProject.value.replace(/\s/g, '');
        const allTitleValues = [];
        for (let i = 0; i < allLists.length; i++) {
          const listTitle = allLists[i].title;
          const customizedValues = listTitle.replace(/\s/g, '');
          allTitleValues.push(customizedValues);
        }

        const includesValue = allTitleValues.includes(customizedProject);
        const index = allTitleValues.findIndex((item) => item === customizedProject);

        if (includesValue) {
          const arrNum = index;
          updateCustomNums(arrNum);
        }
      } else if ((task.project !== 'All Entries' && taskProject.value !== 'none') && (task.project !== taskProject.value)) {
        const customizedOriginal = task.project.replace(/\s/g, ''); // original value from details
        const customizedCurrent = taskProject.value.replace(/\s/g, ''); // current value from form
        const allTitleValues = [];
        for (let i = 0; i < allLists.length; i++) {
          const listTitle = allLists[i].title;
          const customizedValues = listTitle.replace(/\s/g, '');
          allTitleValues.push(customizedValues);
        }

        const includesValue = allTitleValues.includes(customizedOriginal);
        const index = allTitleValues.findIndex((item) => item === customizedOriginal);

        const includesValue2 = allTitleValues.includes(customizedCurrent);
        const index2 = allTitleValues.findIndex((item) => item === customizedCurrent);
        if (includesValue) {
          const arrNum = index;
          removeCustomNum(arrNum);
        }

        if (includesValue2) {
          const arrNum2 = index2;
          updateCustomNums(arrNum2);
        }
        allTasks[num].project = taskProject.value;
      } else if (task.project !== 'All Entries' && taskProject.value === 'none') {
        const customizedOriginal = task.project.replace(/\s/g, '');
        const allTitleValues = [];
        for (let i = 0; i < allLists.length; i++) {
          const listTitle = allLists[i].title;
          const customizedValues = listTitle.replace(/\s/g, '');
          allTitleValues.push(customizedValues);
        }

        const includesValue = allTitleValues.includes(customizedOriginal);
        const index = allTitleValues.findIndex((item) => item === customizedOriginal);

        if (includesValue) {
          const arrNum = index;
          removeCustomNum(arrNum);
        }
        allTasks[num].project = 'none';
      }

      if ((taskImportance.checked === true) || (taskImportancePhone.checked === true)) {
        allTasks[num].importance = 'important';
        importantTasks.push(allTasks[num]);
        allTasks.splice(num, 1);
      } else {
        allTasks[num].importance = 'not-important';
      }

      generateImmediately();
      removeMenu();
      closeDetails();
    }

    function changeStatsImp(num) {
      importantTasks[num].title = taskTitle.value;
      importantTasks[num].details = taskDetails.value;
      importantTasks[num].date = taskDate.value;

      if (task.project === 'All Entries' && taskProject.value === 'none') {
        importantTasks[num].project = 'none';
      } else if (task.project === 'All Entries' && taskProject.value !== 'none') {
        importantTasks[num].project = taskProject.value;
        const customizedProject = taskProject.value.replace(/\s/g, '');
        const allTitleValues = [];
        for (let i = 0; i < allLists.length; i++) {
          const listTitle = allLists[i].title;
          const customizedValues = listTitle.replace(/\s/g, '');
          allTitleValues.push(customizedValues);
        }

        const includesValue = allTitleValues.includes(customizedProject);
        const index = allTitleValues.findIndex((item) => item === customizedProject);

        if (includesValue) {
          const arrNum = index;
          updateCustomNums(arrNum);
        }
      } else if ((task.project !== 'All Entries' && taskProject.value !== 'none') && (task.project !== taskProject.value)) {
        const customizedOriginal = task.project.replace(/\s/g, ''); // original value from details
        const customizedCurrent = taskProject.value.replace(/\s/g, ''); // current value from form
        const allTitleValues = [];
        for (let i = 0; i < allLists.length; i++) {
          const listTitle = allLists[i].title;
          const customizedValues = listTitle.replace(/\s/g, '');
          allTitleValues.push(customizedValues);
        }

        const includesValue = allTitleValues.includes(customizedOriginal);
        const index = allTitleValues.findIndex((item) => item === customizedOriginal);

        const includesValue2 = allTitleValues.includes(customizedCurrent);
        const index2 = allTitleValues.findIndex((item) => item === customizedCurrent);
        if (includesValue) {
          const arrNum = index;
          removeCustomNum(arrNum);
        }

        if (includesValue2) {
          const arrNum2 = index2;
          updateCustomNums(arrNum2);
        }

        importantTasks[num].project = taskProject.value;
      } else if (task.project !== 'All Entries' && taskProject.value === 'none') {
        const customizedOriginal = task.project.replace(/\s/g, '');
        const allTitleValues = [];
        for (let i = 0; i < allLists.length; i++) {
          const listTitle = allLists[i].title;
          const customizedValues = listTitle.replace(/\s/g, '');
          allTitleValues.push(customizedValues);
        }

        const includesValue = allTitleValues.includes(customizedOriginal);
        const index = allTitleValues.findIndex((item) => item === customizedOriginal);

        if (includesValue) {
          const arrNum = index;
          removeCustomNum(arrNum);
        }

        importantTasks[num].project = 'none';
      }

      if ((taskImportance.checked === false) || (taskImportancePhone.checked === false)) {
        importantTasks[num].importance = 'not-important';
        allTasks.push(importantTasks[num]);
        importantTasks.splice(num, 1);
      } else {
        importantTasks[num].importance = 'important';
      }

      generateImmediately();
      removeMenu();
      closeDetails();
    }

    if (taskTitle.value === '') {
      false;
    } else {
      if (taskDate.value === '') {
        if (task.importance === 'Not important task') {
          const taskTitles = [];
          for (let i = 0; i < allTasks.length; i++) {
            taskTitles.push(allTasks[i].title);
          }

          const arrayCustomized = taskTitles.map((str) => str.replace(/\s/g, ''));
          const titleCustomized = task.title.replace(/\s/g, '');

          const includesValue = arrayCustomized.includes(titleCustomized);
          const index = arrayCustomized.findIndex((item) => item === titleCustomized);

          if (includesValue) {
            changeStatsNi(index);
          } else {
            false;
          }
        } else {
          const taskTitlesImp = [];
          for (let i = 0; i < importantTasks.length; i++) {
            taskTitlesImp.push(importantTasks[i].title);
          }

          const arrayCustomized = taskTitlesImp.map((str) => str.replace(/\s/g, ''));
          const titleCustomized = task.title.replace(/\s/g, '');

          const includesValue = arrayCustomized.includes(titleCustomized);
          const index = arrayCustomized.findIndex((item) => item === titleCustomized);

          if (includesValue) {
            changeStatsImp(index);
          } else {
            false;
          }
        }
      } else {
        const userDate = taskDate.value;
        const currentDate = new Date();
        const dueDate = parseISO(userDate);
        const difference = differenceInDays(dueDate, currentDate);

        if (difference < 0) {
          showAlert('The due date is older than the current date.');
        } else {
          if (task.importance === 'Not important task') {
            const taskTitles = [];
            for (let i = 0; i < allTasks.length; i++) {
              taskTitles.push(allTasks[i].title);
            }

            const arrayCustomized = taskTitles.map((str) => str.replace(/\s/g, ''));
            const titleCustomized = task.title.replace(/\s/g, '');

            const includesValue = arrayCustomized.includes(titleCustomized);
            const index = arrayCustomized.findIndex((item) => item === titleCustomized);

            if (includesValue) {
              changeStatsNi(index);
            } else {
              false;
            }
          } else {
            const taskTitlesImp = [];
            for (let i = 0; i < importantTasks.length; i++) {
              taskTitlesImp.push(importantTasks[i].title);
            }

            const arrayCustomized = taskTitlesImp.map((str) => str.replace(/\s/g, ''));
            const titleCustomized = task.title.replace(/\s/g, '');

            const includesValue = arrayCustomized.includes(titleCustomized);
            const index = arrayCustomized.findIndex((item) => item === titleCustomized);

            if (includesValue) {
              changeStatsImp(index);
            } else {
              false;
            }
          }
        }
      }
    }
    retrieveCustom();
  });
}

const note = {};

function noteEditor(originalTitle, originalDetails) {
  note.title = originalTitle;
  note.details = originalDetails;

  noteEditButton.addEventListener('click', (event) => {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();

    const noteTitle = document.querySelector('.note-editor-title-input input');
    const noteDetails = document.querySelector('.note-editor-details-input textarea');

    prepareAll();

    const allNoteInputs = document.querySelectorAll('.note-editor-form input');

    allNoteInputs.forEach((input) => {
      input.checkValidity();
      input.reportValidity();
    });

    function removeMenu() {
      document.querySelector('.creator-menu').classList.remove('active-menu');
      document.querySelector('.note-editor').classList.remove('active-note-editor');
      // REMOVES ALL CONTENT FROM FORMS
      noteTitle.value = '';
      noteDetails.value = '';
    }

    function changeNoteStats(num) {
      allNotes[num].title = noteTitle.value;
      allNotes[num].details = noteDetails.value;

      closeDetails();
      removeMenu();
    }

    const allNoteTitles = [];

    for (let i = 0; i < allNotes.length; i++) {
      allNoteTitles.push(allNotes[i].title);
    }

    const arrayCustomized = allNoteTitles.map((str) => str.replace(/\s/g, ''));
    const titleCustomized = note.title.replace(/\s/g, '');

    const includesValue = arrayCustomized.includes(titleCustomized);
    const index = arrayCustomized.findIndex((item) => item === titleCustomized);

    if (includesValue) {
      if (noteTitle.value === '') {
        false;
      } else {
        changeNoteStats(index);
      }
    } else {
      false;
    }
    prepareAll();
  });
}

startEditButton.addEventListener('click', () => {
  closeDetails();
  const currentList = document.querySelector('.details-list p');
  if (currentList.textContent === 'Notes') {
    const noteTitle = document.querySelector('.note-editor-title-input input');
    const noteDetails = document.querySelector('.note-editor-details-input textarea');

    const originalTitle = document.querySelector('.details-info-heading-text h2').textContent;
    const originalDetails = document.querySelector('.details-info-details-text p').textContent;

    noteTitle.value = originalTitle;

    if (originalDetails === 'This note has no description') {
      noteDetails.value = '';
    } else {
      noteDetails.value = originalDetails;
    }

    noteEditor(originalTitle, originalDetails);
  } else {
    const taskTitle = document.querySelector('.todo-editor-title-input input');
    const taskDetails = document.querySelector('.todo-editor-details-input textarea');
    const taskProjects = document.querySelector('.todo-editor-projects-input select');
    const taskDate = document.querySelector('.todo-editor-date-input input');
    const taskImportance = document.querySelector('.container-edit input');
    const taskImportancePhone = document.querySelector('.container-edit-phone input');

    const originalTitle = document.querySelector('.details-info-heading-text h2').textContent;
    const originalDetails = document.querySelector('.details-info-details-text p').textContent;
    const originalDueDate = document.querySelector('.details-info-date-number p').textContent;
    const originalStatus = document.querySelector('.details-info-status-text p').textContent;
    const originalImportance = document.querySelector('.details-info-importance-text p').textContent;
    const originalProject = document.querySelector('.details-list p').textContent;

    taskTitle.value = originalTitle;

    if (originalDetails === 'This task has no description') {
      taskDetails.value = '';
    } else {
      taskDetails.value = originalDetails;
    }

    if (originalDueDate === 'The date has not been set') {
      taskDate.value = '';
    } else {
      taskDate.value = originalDueDate;
    }

    if (originalImportance === 'Not important task') {
      taskImportance.checked = false;
      taskImportancePhone.checked = false;
    } else {
      taskImportance.checked = true;
      taskImportancePhone.checked = true;
    }

    if (originalProject === 'All Entries') {
      taskProjects.value = 'none';
    } else {
      taskProjects.value = originalProject;
    }

    taskEditor(originalTitle, originalDetails, originalDueDate, originalImportance, originalProject, originalStatus);
  }
  retrieveCustom();
});

noteDoneButton.addEventListener('click', (event) => {
  event.preventDefault();

  body.classList.remove('menu-active');
  const mobileMenu = document.querySelector('.creator-menu-mobile');

  mobileMenu.classList.remove('active-menu-mobile');

  document.querySelector('.mobile-adder i').classList.remove('rotated');

  mobileTodoIcon.classList.remove('active-todo-mobile');
  mobileProjectIcon.classList.remove('active-project-mobile');
  mobileNoteIcon.classList.remove('active-note-mobile');

  todoPar.classList.remove('options-appear');
  projectPar.classList.remove('options-appear');
  notePar.classList.remove('options-appear');

  // SWITCHES TO ALL SECTION
  prepareAll();

  const allNoteInputs = document.querySelectorAll('.note-setter-form input');
  allNoteInputs.forEach((input) => {
    input.checkValidity();
    input.reportValidity();
  });
  const noteTitle = document.querySelector('.note-setter-title-input input');

  const noteDetails = document.querySelector('.note-setter-details-input textarea');

  if (noteTitle.value === '') {
    false;
  } else {
    if (allNotesTitles.length > 0) {
      const noteValue = noteTitle.value;
      if (allNotesTitles.some((item) => item === noteValue)) {
        showAlert('This note already exists');
      } else {
        addToAllNotes(noteTitle.value, noteDetails.value);
        for (let i = 0; i < allNotes.length; i++) {
          allNotesTitles.push(allNotes[i].title);
        }
        // REMOVES MENUS
        document.querySelector('.creator-menu').classList.remove('active-menu');
        document.querySelector('.note-setter').classList.remove('active-note-setter');
        // REMOVES ALL CONTENT FROM FORMS
        noteTitle.value = '';
        noteDetails.value = '';
      }
    } else {
      addToAllNotes(noteTitle.value, noteDetails.value);
      for (let i = 0; i < allNotes.length; i++) {
        allNotesTitles.push(allNotes[i].title);
      }
      // REMOVES MENUS
      document.querySelector('.creator-menu').classList.remove('active-menu');
      document.querySelector('.note-setter').classList.remove('active-note-setter');
      // REMOVES ALL CONTENT FROM FORMS
      noteTitle.value = '';
      noteDetails.value = '';
    }
  }
  prepareAll();
});

function updateOptions() {
  const listTitles = document.querySelectorAll('.project-name h2');
  allListTitles = [];

  for (let i = 0; i < listTitles.length; i++) {
    allListTitles.push(listTitles[i].textContent);
  }

  selectInput.innerHTML = '';
  selectInputEdit.innerHTML = '';
  selectInputRemoval.innerHTML = '';

  const noneElement = document.createElement('option');
  const noneElementEdit = document.createElement('option');
  const noneElementRemoval = document.createElement('option');

  noneElement.value = 'none';
  noneElement.textContent = 'none';
  noneElementEdit.value = 'none';
  noneElementEdit.textContent = 'none';
  noneElementRemoval.value = 'none';
  noneElementRemoval.textContent = 'none';
  selectInput.appendChild(noneElement);
  selectInputEdit.appendChild(noneElementEdit);
  selectInputRemoval.appendChild(noneElementRemoval);

  allListOptions = [];

  for (let i = 0; i < allListTitles.length; i++) {
    allListOptions.push(allListTitles[i]);
  }

  for (let i = 0; i < allListOptions.length; i++) {
    const option = document.createElement('option');
    const optionEdit = document.createElement('option');
    const optionRemoval = document.createElement('option');
    option.classList.add('list-item');
    option.text = allListOptions[i];
    optionEdit.text = allListOptions[i];
    optionRemoval.text = allListOptions[i];
    selectInput.add(option);
    selectInputEdit.add(optionEdit);
    selectInputRemoval.add(optionRemoval);
  }

  addOptionAttribute();
  prepareLists();
}

function updateOptionsRemoval() {
  const listTitles = document.querySelectorAll('.project-name h2');
  allListTitles = [];

  for (let i = 0; i < listTitles.length; i++) {
    allListTitles.push(listTitles[i].textContent);
  }

  selectInput.innerHTML = '';
  selectInputEdit.innerHTML = '';
  selectInputRemoval.innerHTML = '';

  const noneElement = document.createElement('option');
  const noneElementEdit = document.createElement('option');
  const noneElementRemoval = document.createElement('option');

  noneElement.value = 'none';
  noneElement.textContent = 'none';
  noneElementEdit.value = 'none';
  noneElementEdit.textContent = 'none';
  noneElementRemoval.value = 'none';
  noneElementRemoval.textContent = 'none';
  selectInput.appendChild(noneElement);
  selectInputEdit.appendChild(noneElementEdit);
  selectInputRemoval.appendChild(noneElementRemoval);

  allListOptions = [];

  for (let i = 0; i < allListTitles.length; i++) {
    allListOptions.push(allListTitles[i]);
  }

  for (let i = 0; i < allListOptions.length; i++) {
    const option = document.createElement('option');
    const optionEdit = document.createElement('option');
    const optionRemoval = document.createElement('option');
    option.classList.add('list-item');
    option.text = allListOptions[i];
    optionEdit.text = allListOptions[i];
    optionRemoval.text = allListOptions[i];
    selectInput.add(option);
    selectInputEdit.add(optionEdit);
    selectInputRemoval.add(optionRemoval);
  }

  addOptionAttribute();
}

listDoneButton.addEventListener('click', (event) => {
  event.preventDefault();

  body.classList.remove('menu-active');
  mobileMenu.classList.remove('active-menu-mobile');

  document.querySelector('.mobile-adder i').classList.remove('rotated');

  mobileTodoIcon.classList.remove('active-todo-mobile');
  mobileProjectIcon.classList.remove('active-project-mobile');
  mobileNoteIcon.classList.remove('active-note-mobile');

  todoPar.classList.remove('options-appear');
  projectPar.classList.remove('options-appear');
  notePar.classList.remove('options-appear');

  // SWITCHES TO ALL SECTION
  prepareAll();

  const allNoteInputs = document.querySelectorAll('.project-setter-form input');
  allNoteInputs.forEach((input) => {
    input.checkValidity();
    input.reportValidity();
  });

  const projectTitle = document.querySelector('.project-setter-title-input textarea');

  const projectColor = document.querySelector('.project-setter-color-input input');

  if (projectTitle.value === '') {
    false;
  } else {
    if (allListTitles.length > 0) {
      const listValue = projectTitle.value;
      const customizedListValues = listValue.replace(/\s/g, '');
      const modifiedArray = allListTitles.map((str) => str.replace(/\s/g, ''));
      if (modifiedArray.some((item) => item === customizedListValues)) {
        showAlert('This list already exists');
      } else {
        addToAllLists(projectTitle.value, projectColor.value);

        for (let i = 0; i < allLists.length; i++) {
          allListTitles.push(allLists[i].title);
        }

        // REMOVES MENUS
        document.querySelector('.creator-menu').classList.remove('active-menu');
        document.querySelector('.project-setter').classList.remove('active-project-setter');
        // REMOVES ALL CONTENT FROM FORMS
        projectTitle.value = '';
        projectColor.value = '#FFFFFF';

        updateOptions();
      }
    } else {
      addToAllLists(projectTitle.value, projectColor.value);

      for (let i = 0; i < allLists.length; i++) {
        allListTitles.push(allLists[i].title);
      }

      updateOptions();

      // REMOVES MENUS
      document.querySelector('.creator-menu').classList.remove('active-menu');
      document.querySelector('.project-setter').classList.remove('active-project-setter');
      // REMOVES ALL CONTENT FROM FORMS
      projectTitle.value = '';
      projectColor.value = '#FFFFFF';
    }
  }
  retrieveCustom();
});

listRemovalButton.addEventListener('click', (event) => {
  wrapper.style.display = 'grid';
  let allRemovedTitles = [];
  event.preventDefault();
  const importantIndexes = [];
  const allIndexes = [];
  const completedIndexes = [];

  function removeAllIndexes() {
    const sortedIndices = allIndexes.sort((a, b) => b - a);
    sortedIndices.forEach((index) => {
      allTasks.splice(index, 1);
    });

    const sortedIndicesImp = importantIndexes.sort((a, b) => b - a);
    sortedIndicesImp.forEach((index) => {
      importantTasks.splice(index, 1);
    });

    const sortedIndicesCompleted = completedIndexes.sort((a, b) => b - a);
    sortedIndicesCompleted.forEach((index) => {
      completedTasks.splice(index, 1);
    });
  }

  projectDeleter.classList.remove('active-project-deleter');
  body.style.overflow = 'visible';

  const currentValue = selectInputRemoval.value;
  const currentValueCustomized = currentValue.replace(/[ .]/g, '');
  let allTitlesArr = [];
  allTitlesArr = [];

  // START

  for (let i = 0; i < allLists.length; i++) {
    allTitlesArr.push(allLists[i].title);
  }

  const listNoSpaces = allTitlesArr.map((str) => str.replace(/\s/g, ''));

  for (let i = 0; i < allLists.length; i++) {
    if (listNoSpaces[i] === currentValueCustomized) {
      keyIndexCustom = i;
    }
  }

  // END

  function removeList(num) {
    allLists.splice(num, 1);
  }

  for (let i = 0; i < allTasks.length; i++) {
    const currentTaskProject = allTasks[i].project.replace(/[ .]/g, '');
    if (currentTaskProject === currentValueCustomized) {
      allRemovedTitles.push(allTasks[i].title);
    }
  }

  for (let i = 0; i < importantTasks.length; i++) {
    const currentTaskProject = importantTasks[i].project.replace(/[ .]/g, '');
    if (currentTaskProject === currentValueCustomized) {
      allRemovedTitles.push(importantTasks[i].title);
    }
  }

  for (let i = 0; i < completedTasks.length; i++) {
    const currentTaskProject = completedTasks[i].project.replace(/[ .]/g, '');
    if (currentTaskProject === currentValueCustomized) {
      allRemovedTitles.push(completedTasks[i].title);
    }
  }

  for (let i = 0; i < allTasks.length; i++) {
    const currentTaskProject = allTasks[i].project.replace(/[ .]/g, '');
    if (currentTaskProject === currentValueCustomized) {
      allIndexes.push(i);
    }
  }

  for (let i = 0; i < importantTasks.length; i++) {
    const currentTaskProject = importantTasks[i].project.replace(/[ .]/g, '');
    if (currentTaskProject === currentValueCustomized) {
      importantIndexes.push(i);
    }
  }

  for (let i = 0; i < completedTasks.length; i++) {
    const currentTaskProject = completedTasks[i].project.replace(/[ .]/g, '');
    if (currentTaskProject === currentValueCustomized) {
      completedIndexes.push(i);
    }
  }

  for (let i = 0; i < allLists.length; i++) {
    const currentTaskProject = allLists[i].title.replace(/[ .]/g, '');
    if (currentTaskProject === currentValueCustomized) {
      removeList(i);
    }
  }

  removeAllIndexes();

  let customizedArr = [];
  customizedArr = [];

  for (let i = 0; i < allListTitles.length; i++) {
    const customizedTitle = allListTitles[i].replace(/[ .]/g, '');
    customizedArr.push(customizedTitle);
  }

  const keyIndex = customizedArr.indexOf(currentValueCustomized);
  allListTitles.splice(keyIndex, 1);

  // START

  let customizedRemoved = allRemovedTitles.map((str) => str.replace(/\s/g, ''));

  let customizedAll = allTasksTitles.map((str) => str.replace(/\s/g, ''));

  let arrayNums = [];

  for (let i = 0; i < customizedRemoved.length; i++) {
    if (customizedAll.includes(customizedRemoved[i])) {
      const titleIndex = customizedAll.indexOf(customizedRemoved[i]);
      arrayNums.push(titleIndex);
    }
  }

  const sortedIndices = arrayNums.sort((a, b) => b - a);

  sortedIndices.forEach((index) => {
    allTasksTitles.splice(index, 1);
  });

  allRemovedTitles = [];
  customizedRemoved = [];
  customizedAll = [];
  arrayNums = [];

  prepareListsRemoval();
  updateOptionsRemoval();
  prepareAll();
  retrieveCustom();
});

// MAKES THE TASK COMPLETED AFTER USER CLICKS THE TASK CHECKBOX
// MAKES THE TASK COMPLETED AFTER USER CLICKS THE TASK CHECKBOX
// MAKES THE TASK COMPLETED AFTER USER CLICKS THE TASK CHECKBOX

function generateImmediately() {
  if (categoryHeading.textContent === 'All Entries') {
    prepareAll();
  } else if (categoryHeading.textContent === 'Important Tasks') {
    prepareImportant();
  } else if (categoryHeading.textContent === 'All Notes') {
    prepareNotes();
  } else if (categoryHeading.textContent === 'Week\'s Tasks') {
    todos.innerHTML = '';
    checkEveryDate();
    loopAllWeekImportant();
    loopAllWeekNotImportant();
  } else if (categoryHeading.textContent === 'Today\'s Tasks') {
    todos.innerHTML = '';
    checkEveryDate();
    loopAllDaysImportant();
    loopAllDaysNotImportant();
  } else if (categoryHeading.textContent === 'Completed Tasks') {
    todos.innerHTML = '';
    prepareCompleted();
  } else {
    todos.innerHTML = '';
    const currentText = categoryHeading.textContent;
    const currentTextCustomized = currentText.replace(/[ .]/g, '');
    generateCustom(currentTextCustomized);
  }
}

function removeCustomNum(num) {
  updateArrayNumbers();
  const allProjectLists = document.querySelectorAll('.project-list');

  const projectCount = allProjectLists[num].querySelector('.project-count p').textContent;

  const projectNum = Number(projectCount);

  const addedNum = projectNum - 1;

  allProjectLists[num].querySelector('.project-count p').textContent = addedNum;
}

document.addEventListener('click', (event) => {
  let clickedElement = event.target;
  const clickedElement2 = event.target;
  const classes = clickedElement.classList;
  const parentClasses = [];
  const classArray = Array.from(classes);

  while (clickedElement.tagName !== 'HTML') {
    const elementClasses = clickedElement.classList;

    if (elementClasses.length > 0) {
      for (let i = 0; i < elementClasses.length; i++) {
        const className = elementClasses[i];
        if (!parentClasses.includes(className)) {
          parentClasses.push(className);
        }
      }
    }

    clickedElement = clickedElement.parentNode;
  }

  const audio = new Audio('audio/apple.mp3');
  let isPlaying = false;

  if (classArray.includes('not-important-round')) {
    closeDetails();
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    }

    audio.play();
    isPlaying = true;
    const roundAtt = clickedElement2.getAttribute('data-card');

    const dataItem = document.querySelector(`.not-important[data-card="${roundAtt}"]`);
    const itemAtt = dataItem.getAttribute('data-item');

    disablePointerEvents();
    setTimeout(() => animateUp(itemAtt), 1500);

    // ANIMATION

    const keyElement = document.querySelector(`.not-important[data-card="${roundAtt}"]`);
    const realCheckIcon = keyElement.querySelector('.check-icon');
    const realStatusLabel = keyElement.querySelector('.task-status label');

    realCheckIcon.style.display = 'block';
    realStatusLabel.style.animation = 'none';
    realStatusLabel.style.borderColor = '#5cb85c';

    keyElement.classList.add('animate-it');
    keyElement.style.pointerEvents = 'none';
    const movingObject = allTasks[roundAtt];
    const chosenProject = allTasks[roundAtt].project;
    if (chosenProject !== 'none') {
      const customizedProject = chosenProject.replace(/\s/g, '');

      for (let i = 0; i < allLists.length; i++) {
        const listTitle = allLists[i].title;
        const customizedTitle = listTitle.replace(/\s/g, '');

        if (customizedTitle === customizedProject) {
          const arrNum = i;
          removeCustomNum(arrNum);
          break;
        }
      }
    }
    completedTasks.push(movingObject);
    allTasks.splice(roundAtt, 1);

    if (wrapper.classList.contains('details')) {
      document.querySelector('.details-info-status-text p').textContent = 'Completed task';
    }

    setTimeout(generateImmediately, 2400);
    updateArrayNumbers();
    retrieveCustom();
  } else if (classArray.includes('important-round')) {
    closeDetails();
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    }

    audio.play();
    isPlaying = true;

    const roundAtt = clickedElement2.getAttribute('data-card');
    const dataItem = document.querySelector(`.important-task[data-card="${roundAtt}"]`);
    const itemAtt = dataItem.getAttribute('data-item');

    disablePointerEvents();
    setTimeout(() => animateUp(itemAtt), 1500);

    const keyElement = document.querySelector(`.important-task[data-card="${roundAtt}"]`);

    const statusLabel = keyElement.querySelector('.task-status label');
    const checkIcon = keyElement.querySelector('.check-icon');

    checkIcon.style.display = 'block';
    statusLabel.style.animation = 'none';
    statusLabel.style.borderColor = '#5cb85c';

    keyElement.classList.add('animate-it');
    keyElement.style.pointerEvents = 'none';

    const movingObject = importantTasks[roundAtt];
    completedTasks.push(movingObject);
    importantTasks.splice(roundAtt, 1);

    setTimeout(generateImmediately, 2400);
    updateArrayNumbers();
    retrieveCustom();
    setTimeout(setAttributeToBoard, 1000);
  }

  if (parentClasses.includes('fa-star') && !parentClasses.includes('important-task') && !parentClasses.includes('completed-task')) {
    disablePointerEvents();
    const roundAtt = clickedElement2.getAttribute('data-card');
    const dataCardTask = document.querySelector(`.not-important[data-card="${roundAtt}"]`);
    const itemAtt = dataCardTask.getAttribute('data-item');
    const movingObject = allTasks[roundAtt];
    movingObject.importance = 'important';
    const task = todos.querySelectorAll('.not-important');
    const taskSpecial = document.querySelector(`.not-important[data-card="${roundAtt}"]`);
    if (wrapper.classList.contains('details')) {
      document.querySelector('.details-info-importance-text p').textContent = 'Important task';
    }

    function runSpecial() {
      taskSpecial.classList.remove('not-important');
      taskSpecial.classList.add('important-task');
    }

    function runCategories() {
      task[roundAtt].classList.remove('not-important');
      task[roundAtt].classList.add('important-task');
    }

    // VISUAL
    if (categoryHeading.textContent === 'All Entries' || categoryHeading.textContent === 'Important Tasks' || categoryHeading.textContent === 'All Notes') {
      task[roundAtt].querySelector('.fa-star').style.color = 'yellow';
      setTimeout(runCategories, 1000);
    } else {
      taskSpecial.querySelector('.fa-star').style.color = 'yellow';
      setTimeout(runSpecial, 1000);
    }
    // VISUAL
    animateDownNi(itemAtt);
    importantTasks.push(movingObject);
    allTasks.splice(roundAtt, 1);

    if (categoryHeading.textContent === 'All Entries') {
      setTimeout(prepareAll, 1000);
    } else if (categoryHeading.textContent === 'Important Tasks') {
      setTimeout(prepareImportant, 1000);
    } else if (categoryHeading.textContent === 'All Notes') {
      setTimeout(prepareNotes, 1000);
    } else if (categoryHeading.textContent === 'Today\'s Tasks') {
      checkEveryDate();
      setTimeout(() => {
        todos.innerHTML = '';
        loopAllDaysImportant();
        loopAllDaysNotImportant();
      }, 1000);
    } else if (categoryHeading.textContent === 'Week\'s Tasks') {
      checkEveryDate();
      setTimeout(() => {
        todos.innerHTML = '';
        loopAllWeekImportant();
        loopAllWeekNotImportant();
      }, 1000);
    } else {
      setTimeout(() => {
        prepareWithoutName();
        todos.innerHTML = '';
      }, 1000);
      const currentText = categoryHeading.textContent;
      const currentTextCustomized = currentText.replace(/[ .]/g, '');
      setTimeout(() => {
        generateCustom(currentTextCustomized);
      }, 1000);
    }
    updateArrayNumbers();
    setTimeout(setAttributeToBoard, 1000);
  } else if (parentClasses.includes('fa-star') && parentClasses.includes('important-task') && !parentClasses.includes('completed-task')) {
    disablePointerEvents();
    const roundAtt = clickedElement2.getAttribute('data-card');
    const dataCardTask = document.querySelector(`.important-task[data-card="${roundAtt}"]`);
    const itemAtt = dataCardTask.getAttribute('data-item');
    const movingObject = importantTasks[roundAtt];
    movingObject.importance = 'not-important';
    const task = todos.querySelectorAll('.important-task');
    const taskSpecial = document.querySelector(`.important-task[data-card="${roundAtt}"]`);
    if (wrapper.classList.contains('details')) {
      document.querySelector('.details-info-importance-text p').textContent = 'Not important task';
    }

    function runSpecial() {
      taskSpecial.classList.remove('important-task');
      taskSpecial.classList.add('not-important');
    }

    function runCategories() {
      task[roundAtt].classList.remove('important-task');
      task[roundAtt].classList.add('not-important');
    }

    if (categoryHeading.textContent === 'All Entries' || categoryHeading.textContent === 'Important Tasks' || categoryHeading.textContent === 'All Notes') {
      setTimeout(runCategories, 1000);
      task[roundAtt].querySelector('.fa-star').style.color = 'white';
    } else {
      setTimeout(runSpecial, 1000);
      taskSpecial.querySelector('.fa-star').style.color = 'white';
    }

    animateDownImp(itemAtt);
    allTasks.push(movingObject);
    importantTasks.splice(roundAtt, 1);

    if (categoryHeading.textContent === 'All Entries') {
      setTimeout(prepareAll, 1000);
    } else if (categoryHeading.textContent === 'Important Tasks') {
      setTimeout(prepareImportant, 1000);
    } else if (categoryHeading.textContent === 'All Notes') {
      setTimeout(prepareNotes, 1000);
    } else if (categoryHeading.textContent === 'Today\'s Tasks') {
      checkEveryDate();
      setTimeout(() => {
        todos.innerHTML = '';
        loopAllDaysImportant();
        loopAllDaysNotImportant();
      }, 1000);
    } else if (categoryHeading.textContent === 'Week\'s Tasks') {
      checkEveryDate();
      setTimeout(() => {
        todos.innerHTML = '';
        loopAllWeekImportant();
        loopAllWeekNotImportant();
      }, 1000);
    } else {
      setTimeout(() => {
        prepareWithoutName();
        todos.innerHTML = '';
      }, 1000);
      const currentText = categoryHeading.textContent;
      const currentTextCustomized = currentText.replace(/[ .]/g, '');
      setTimeout(() => {
        generateCustom(currentTextCustomized);
      }, 1000);
    }
    updateArrayNumbers();
    setTimeout(setAttributeToBoard, 1000);
  }

  // SHOWS TASK DETAILS
  // SHOWS TASK DETAILS
  // SHOWS TASK DETAILS

  if (parentClasses.includes('task') && (parentClasses.includes('not-important')) && !parentClasses.includes('fa-star') && !parentClasses.includes('round')) {
    const taskDetails = document.querySelector('.task-details');
    wrapper.classList.add('details');
    taskDetails.classList.add('active-task-details');
    const mobileAdder = document.querySelector('.mobile-adder');
    mobileAdder.style.display = 'none';

    const roundAtt = clickedElement2.getAttribute('data-card');

    const infoHeading = document.querySelector('.details-info-heading-text h2');
    const infoDetails = document.querySelector('.details-info-details-text p');
    const detailsList = document.querySelector('.details-list p');
    const infoDate = document.querySelector('.details-info-date-number p');
    const infoImportance = document.querySelector('.details-info-importance-text p');
    const infoStatus = document.querySelector('.details-info-status-text p');

    document.querySelector('.details-info-date').style.display = 'grid';
    document.querySelector('.details-info-importance').style.display = 'grid';
    document.querySelector('.details-info-status').style.display = 'grid';

    infoHeading.textContent = allTasks[roundAtt].title;
    infoDetails.textContent = allTasks[roundAtt].details;
    infoDate.textContent = allTasks[roundAtt].date;
    infoImportance.textContent = 'Not important task';
    infoStatus.textContent = 'Not done yet';

    if (allTasks[roundAtt].project === 'none') {
      detailsList.textContent = 'All Entries';
    } else {
      detailsList.textContent = allTasks[roundAtt].project;
    }

    if (allTasks[roundAtt].details === '') {
      infoDetails.textContent = 'This task has no description';
    }

    if (allTasks[roundAtt].date === '') {
      infoDate.textContent = 'The date has not been set';
    }
  } else if (parentClasses.includes('task') && parentClasses.includes('important-task') && !parentClasses.includes('fa-star') && !parentClasses.includes('round')) {
    const taskDetails = document.querySelector('.task-details');
    wrapper.classList.add('details');
    taskDetails.classList.add('active-task-details');
    const mobileAdder = document.querySelector('.mobile-adder');
    mobileAdder.style.display = 'none';

    const roundAtt = clickedElement2.getAttribute('data-card');

    const infoHeading = document.querySelector('.details-info-heading-text h2');
    const infoDetails = document.querySelector('.details-info-details-text p');
    const detailsList = document.querySelector('.details-list p');
    const infoDate = document.querySelector('.details-info-date-number p');
    const infoImportance = document.querySelector('.details-info-importance-text p');
    const infoStatus = document.querySelector('.details-info-status-text p');

    document.querySelector('.details-info-date').style.display = 'grid';
    document.querySelector('.details-info-importance').style.display = 'grid';
    document.querySelector('.details-info-status').style.display = 'grid';

    infoHeading.textContent = importantTasks[roundAtt].title;
    infoDetails.textContent = importantTasks[roundAtt].details;
    infoDate.textContent = importantTasks[roundAtt].date;
    infoImportance.textContent = 'Important task';
    infoStatus.textContent = 'Not done yet';
    if (importantTasks[roundAtt].date === '') {
      infoDate.textContent = 'The date has not been set';
    }
    if (importantTasks[roundAtt].details === '') {
      infoDetails.textContent = 'This task has no description';
    }
    if (importantTasks[roundAtt].project === 'none') {
      detailsList.textContent = 'All Entries';
    } else {
      detailsList.textContent = importantTasks[roundAtt].project;
    }
  } else if (parentClasses.includes('task') && parentClasses.includes('completed-task') && !parentClasses.includes('fa-star') && !parentClasses.includes('round')) {
    const taskDetails = document.querySelector('.task-details');
    wrapper.classList.add('details');
    taskDetails.classList.add('active-task-details');
    const mobileAdder = document.querySelector('.mobile-adder');
    mobileAdder.style.display = 'none';

    const roundAtt = clickedElement2.getAttribute('data-card');

    const infoHeading = document.querySelector('.details-info-heading-text h2');
    const infoDetails = document.querySelector('.details-info-details-text p');
    const detailsList = document.querySelector('.details-list p');
    const infoDate = document.querySelector('.details-info-date-number p');
    const infoImportance = document.querySelector('.details-info-importance-text p');
    const infoStatus = document.querySelector('.details-info-status-text p');

    document.querySelector('.details-info-date').style.display = 'grid';
    document.querySelector('.details-info-importance').style.display = 'grid';
    document.querySelector('.details-info-status').style.display = 'grid';

    infoHeading.textContent = completedTasks[roundAtt].title;
    infoDetails.textContent = completedTasks[roundAtt].details;
    infoDate.textContent = completedTasks[roundAtt].date;
    infoStatus.textContent = 'Completed task';
    if (completedTasks[roundAtt].importance === 'important') {
      infoImportance.textContent = 'Important task';
    } else {
      infoImportance.textContent = 'Not important task';
    }
    if (completedTasks[roundAtt].date === '') {
      infoDate.textContent = 'The date has not been set';
    }
    if (completedTasks[roundAtt].details === '') {
      infoDetails.textContent = 'This task has no description';
    }
    if (completedTasks[roundAtt].project === 'none') {
      detailsList.textContent = 'All Entries';
    } else {
      detailsList.textContent = completedTasks[roundAtt].project;
    }
  } else if (parentClasses.includes('note')) {
    const taskDetails = document.querySelector('.task-details');
    wrapper.classList.add('details');
    taskDetails.classList.add('active-task-details');
    const mobileAdder = document.querySelector('.mobile-adder');
    mobileAdder.style.display = 'none';

    const roundAtt = clickedElement2.getAttribute('data-card');

    const infoHeading = document.querySelector('.details-info-heading-text h2');
    const infoDetails = document.querySelector('.details-info-details-text p');
    const detailsList = document.querySelector('.details-list p');

    const infoDate = document.querySelector('.details-info-date');
    const infoImportance = document.querySelector('.details-info-importance');
    const infoStatus = document.querySelector('.details-info-status');

    detailsList.textContent = 'Notes';
    infoHeading.textContent = allNotes[roundAtt].title;
    infoDetails.textContent = allNotes[roundAtt].details;
    infoDate.style.display = 'none';
    infoStatus.style.display = 'none';
    infoImportance.style.display = 'none';
    if (allNotes[roundAtt].details === '') {
      infoDetails.textContent = 'This note has no description';
    }
  }

  const clickedElementDetails = event.target;
  event.stopImmediatePropagation();
  event.stopPropagation();
  if (clickedElementDetails.classList.contains('project-list')) {
    removeBackground();
    const heading = clickedElementDetails.querySelector('h2').textContent;
    categoryHeading.textContent = heading;
    todos.innerHTML = '';
    const originalText = heading;
    const customizedText = originalText.replace(/[ .]/g, '');
    generateCustom(customizedText);
    closeDetails();
  } else {
    false;
  }
});

const detailsCross = document.querySelector('.details-xmark');
detailsCross.addEventListener('click', () => {
  closeDetails();
});

// MAKES USER UNABLE TO TYPE ENTER IN TEXTAREAS

const textarea = document.querySelector('.project-setter-title-input textarea');

textarea.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
  }
});

// REMOVES TODO
// REMOVES TODO
// REMOVES TODO

const trash = document.querySelector('.task-trash');
trash.addEventListener('click', () => {
  const importanceStatus = document.querySelector('.details-info-importance-text p').textContent;
  const titleStatus = document.querySelector('.details-info-heading-text h2').textContent;
  let statusStatus = document.querySelector('.details-info-status-text p').textContent;
  const detailsList = document.querySelector('.details-list p').textContent;

  if (detailsList === 'Notes') {
    statusStatus = '';
  }

  const currentTitle = titleStatus;
  if (statusStatus === 'Not done yet') {
    if (importanceStatus === 'Not important task') {
      for (let i = 0; i < allTasks.length; i++) {
        if (allTasks[i].title === currentTitle) {
          const keyTitle = allTasks[i].title;
          const impNum = allTasksTitles.indexOf(keyTitle);
          allTasksTitles.splice(impNum, 1);
          allTasks.splice(i, 1);
          break;
        }
      }
    } else {
      for (let i = 0; i < importantTasks.length; i++) {
        if (importantTasks[i].title === currentTitle) {
          const keyTitle = importantTasks[i].title;
          const impNum = allTasksTitles.indexOf(keyTitle);
          allTasksTitles.splice(impNum, 1);
          importantTasks.splice(i, 1);
          break;
        }
      }
    }
  } else if (statusStatus === '') {
    for (let i = 0; i < allNotes.length; i++) {
      if (allNotes[i].title === currentTitle) {
        const keyTitle = allNotes[i].title;
        const impNum = allNotesTitles.indexOf(keyTitle);
        allNotesTitles.splice(impNum, 1);
        allNotes.splice(i, 1);
        break;
      }
    }
  } else {
    for (let i = 0; i < completedTasks.length; i++) {
      if (completedTasks[i].title === currentTitle) {
        const keyTitle = completedTasks[i].title;
        const impNum = allTasksTitles.indexOf(keyTitle);
        allTasksTitles.splice(impNum, 1);
        completedTasks.splice(i, 1);
        break;
      }
    }
  }

  const chosenProject = document.querySelector('.details-list p').textContent;
  const chosenStatus = document.querySelector('.details-info-status-text p').textContent;
  if (chosenProject !== 'All Entries') {
    const customizedProject = chosenProject.replace(/\s/g, '');

    for (let i = 0; i < allLists.length; i++) {
      const listTitle = allLists[i].title;
      const customizedTitle = listTitle.replace(/\s/g, '');

      if ((customizedTitle === customizedProject) && (chosenStatus === 'Not done yet')) {
        const arrNum = i;
        removeCustomNum(arrNum);
        break;
      } else {
        false;
      }
    }
  }

  checkEveryDate();
  generateImmediately();
  closeDetails();
  retrieveCustom();
});

// REMOVES THE LIST

const projectTrash = document.querySelector('.list-trash');
const projectDeleter = document.querySelector('.project-deleter');
const body = document.querySelector('body');
const deleterXmark = document.querySelector('.deleter-xmark');

projectTrash.addEventListener('click', () => {
  closeDetails();
  projectDeleter.classList.add('active-project-deleter');
  wrapper.style.display = 'none';
  body.style.overflow = 'visible';
});

deleterXmark.addEventListener('click', () => {
  projectDeleter.classList.remove('active-project-deleter');
  wrapper.style.display = 'grid';
});

// ADDS ALL OPTIONS TO SEARCH OPTION ARRAY

const searchInput = document.getElementById('normal_search');
const content = document.querySelector('.options');
const project = document.querySelector('.projects');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  const allDefOptions = content.getElementsByTagName('h2');
  const allCustomLists = project.getElementsByTagName('h2');

  Array.from(allDefOptions).forEach((option) => {
    option.innerHTML = option.innerText;
  });

  Array.from(allCustomLists).forEach((option) => {
    option.innerHTML = option.innerText;
  });

  if (query) {
    Array.from(allDefOptions).forEach((option) => {
      const regex = new RegExp(`(${query})`, 'gi');
      option.innerHTML = option.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    });

    Array.from(allCustomLists).forEach((option) => {
      const regex = new RegExp(`(${query})`, 'gi');
      option.innerHTML = option.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    });
  }
});

// FOR PHONE
// FOR PHONE
// FOR PHONE

const searchInputPhone = document.getElementById('search_phone');
const contentPhone = document.querySelector('.todos');

searchInputPhone.addEventListener('input', () => {
  const query = searchInputPhone.value.trim().toLowerCase();
  const allDefOptions = contentPhone.getElementsByTagName('h2');

  Array.from(allDefOptions).forEach((option) => {
    option.innerHTML = option.innerText;
  });

  if (query) {
    Array.from(allDefOptions).forEach((option) => {
      const regex = new RegExp(`(${query})`, 'gi');
      option.innerHTML = option.innerHTML.replace(regex, '<span class="highlight">$1</span>');
    });
  }
});

// REMOVES EVERYTHING
// REMOVES EVERYTHING
// REMOVES EVERYTHING

const allTrash = document.querySelector('.all-remove');
const trashAlert = document.querySelector('.custom-alert-all');
const trashCancel = document.querySelector('.cancel-all');
const removeTrash = document.querySelector('.remove-all');

allTrash.addEventListener('click', () => {
  trashAlert.classList.add('visible-error');

  wrapper.style.overflow = 'hidden';
  wrapper.style.filter = 'brightness(0.5)';
  wrapper.style.pointerEvents = 'none';

  const audio = new Audio('audio/wrong-message.mp3');
  audio.play();
  retrieveCustom();
});

trashCancel.addEventListener('click', () => {
  wrapper.style.overflow = 'visible';
  wrapper.style.filter = 'brightness(1)';
  wrapper.style.pointerEvents = 'all';
  trashAlert.classList.remove('visible-error');
});

removeTrash.addEventListener('click', () => {
  allTasks = [];
  allTasksTitles = [];
  allListTitles = [];
  allNotesTitles = [];
  todayTasksNi = [];
  todayTasksImp = [];
  weekTasksNi = [];
  currentArrNums = [];
  weekTasksImp = [];
  importantTasks = [];
  allNotes = [];
  completedTasks = [];
  allLists = [];
  allListOptions = [];
  generateArray = [];
  notImportantDataCards = [];
  niDateAttributes = [];
  niWeekAttributes = [];
  impDateAttributes = [];
  impWeekAttributes = [];
  importantDataCards = [];
  generateArrayImportant = [];
  customListArrNumbers = [];

  prepareLists();
  checkEveryDate();
  prepareAll();

  wrapper.style.overflow = 'visible';
  wrapper.style.filter = 'brightness(1)';
  wrapper.style.pointerEvents = 'all';
  trashAlert.classList.remove('visible-error');

  retrieveCustom();
});

// SWAPPER BUTTONS

const swapperAll = document.querySelector('.swapper-all');
const swapperToday = document.querySelector('.swapper-today');
const buttonBg = document.querySelector('#btn');

function moveBackgroundRight() {
  buttonBg.style.borderRadius = '0 4px 4px 0';
  buttonBg.style.opacity = '1';
  buttonBg.style.left = '121px';
}

function moveBackgroundLeft() {
  buttonBg.style.opacity = '1';
  buttonBg.style.left = '3px';
  buttonBg.style.borderRadius = '4px 0 0 4px';
}

function removeBackground() {
  buttonBg.style.opacity = '0';
  buttonBg.style.left = '3px';
  buttonBg.style.right = 'auto';
}

swapperAll.addEventListener('click', () => {
  moveBackgroundLeft();
  prepareAll();
  closeDetails();
});

swapperToday.addEventListener('click', () => {
  moveBackgroundRight();
  todos.innerHTML = '';
  closeDetails();
  checkEveryDate();
  loopAllDaysImportant();
  loopAllDaysNotImportant();
  categoryHeading.textContent = 'Today\'s Tasks';
});
