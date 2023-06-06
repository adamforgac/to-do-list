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
const allNotes = [];
const completedTasks = [];
const todos = document.querySelector('.todos');

const taskDoneButton = document.querySelector('.todo-setter-accept button');
const noteDoneButton = document.querySelector('.note-setter-accept-button');

// CONSTRUCTOR

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

// ATTRIBUTE ADDER

function addTaskAttribute() {
  const everyTask = todos.querySelectorAll('.not-important');

  for (let i = 0; i <= everyTask.length - 1; i++) {
    everyTask[i].setAttribute('data-card', [i]);

    const everyTaskChildren = everyTask[i].querySelectorAll(
      '.task-status, .round',
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
  }
}

function addImportantAttribute() {
  const everyImportant = todos.querySelectorAll('.important-task');

  for (let i = 0; i <= everyImportant.length - 1; i++) {
    everyImportant[i].setAttribute('data-card', [i]);

    const everyImportantChildren = everyImportant[i].querySelectorAll(
      '.task-status, .round',
    );

    everyImportantChildren.forEach((child) => {
      child.setAttribute('data-card', [i]);
    });
  }
}

// CONTENT ADDERS
// CONTENT ADDERS
// CONTENT ADDERS

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

    addNoteAttribute();
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

    addImportantAttribute();
  }
}

// WHOLE CONTENT GENERATORS
// WHOLE CONTENT GENERATORS
// WHOLE CONTENT GENERATORS

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

    addImportantAttribute();
  }
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

    addTaskAttribute();
  }
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

// ARRAYS CREATOR
// ARRAYS CREATOR
// ARRAYS CREATOR

// ADDS CONTENT TO TASK CATEGORY

function addToAllTasks(title, details, project, date, importance) {
  allTasks.push(new Task(title, details, project, date, importance));

  loopThroughtTasks(allTasks.length);
}

// ADDS CONTENT TO NOTE CATEGORY

function addToAllNotes(title, details) {
  allNotes.push(new Note(title, details));
  loopThroughtNotes(allNotes.length);
}

// ADDS CONTENT TO IMPORTANT CATEGORY

function addToImportant(title, details, project, date, importance) {
  importantTasks.push(new Task(title, details, project, date, importance));
  loopThroughtImportant(importantTasks.length);
}

// FUNCTION THAT SWITCH BACK TO ALL SECTION

function swichToAll() {
  todos.innerHTML = '';
  generateImportant();
  generateAllTasks();
  generateAllNotes();
}

// ACTIONS THAT HAPPEN RIGHT AFTER CLICKING THE BUTTON
// ACTIONS THAT HAPPEN RIGHT AFTER CLICKING THE BUTTON
// ACTIONS THAT HAPPEN RIGHT AFTER CLICKING THE BUTTON

taskDoneButton.addEventListener('click', (event) => {
  event.preventDefault();

  // SWITCHES TO ALL SECTION
  swichToAll();

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
    // SETTING TODOS INTO RIGHT ARRAY
    if (taskImportance.checked === true) {
      addToImportant(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value);
    } else if (taskImportance.checked === false) {
      addToAllTasks(taskTitle.value, taskDetails.value, taskProjects.value, taskDate.value, taskImportance.value);
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
});

noteDoneButton.addEventListener('click', (event) => {
  event.preventDefault();

  // SWITCHES TO ALL SECTION
  swichToAll();

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
    addToAllNotes(noteTitle.value, noteDetails.value);
    // REMOVES MENUS
    document.querySelector('.creator-menu').classList.remove('active-menu');
    document.querySelector('.note-setter').classList.remove('active-note-setter');
    // REMOVES ALL CONTENT FROM FORMS
    noteTitle.value = '';
    noteDetails.value = '';
  }
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

// ADDS CONTENT TO IMPORTANT

const importantSection = document.querySelector('.important');

importantSection.addEventListener('click', () => {
  if (importantTasks.length === 0) {
    todos.innerHTML = '';
  } else {
    todos.innerHTML = '';
    generateImportant();
  }
});

// ADDS CONTENT TO ALL

const allSection = document.querySelector('.all');

allSection.addEventListener('click', () => {
  if (allTasks.length === 0) {
    todos.innerHTML = '';
  } else {
    todos.innerHTML = '';
    generateImportant();
    generateAllTasks();
    generateAllNotes();
  }
});
