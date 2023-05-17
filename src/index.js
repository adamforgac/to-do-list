const menu = document.querySelector('.creator-menu');
const creator = document.querySelector('.project-creator');
creator.addEventListener('click', () => {
  menu.classList.add('active-menu');
  document.querySelector('body').classList.add('menu-active');
});
const cross = document.querySelector('.leave-creator i');
cross.addEventListener('click', () => {
  menu.classList.remove('active-menu');
  document.querySelector('body').classList.remove('menu-active');
});

// MOBILE MENU ANIMATION

const mobileAdder = document.querySelector('.mobile-adder');
// ADD BUTTON
const mobileMenu = document.querySelector('.creator-menu-mobile');
// WHOLE MENU PAGE FOR MOBILE
const mobileTodoIcon = document.querySelector('.todo-create-mobile');
// TODO ICON
const mobileProjectIcon = document.querySelector('.project-create-mobile');
// PROJECT ICON
const mobileNoteIcon = document.querySelector('.note-create-mobile');
// NOTE ICON
const todoPar = document.querySelector('.todo-create-mobile p');
// TODO NAME
const projectPar = document.querySelector('.project-create-mobile p');
// PROJECT NAME
const notePar = document.querySelector('.note-create-mobile p');
// NOTE NAME

mobileAdder.addEventListener('click', () => {
  // OPENS THE WHOLE MENU
  mobileMenu.classList.toggle('active-menu-mobile');
  // ROTATES THE ADD MENU ICON
  document.querySelector('.mobile-adder i').classList.toggle('rotated');
  // MOVES THE ICONS
  mobileTodoIcon.classList.toggle('active-todo-mobile');
  mobileProjectIcon.classList.toggle('active-project-mobile');
  mobileNoteIcon.classList.toggle('active-note-mobile');
  // MOVES THE ICONS
  todoPar.classList.toggle('options-appear');
  projectPar.classList.toggle('options-appear');
  notePar.classList.toggle('options-appear');
  // BODY DOES NOT MOVE
  document.querySelector('body').classList.toggle('menu-active');
});

// OPTIONS MENU

// TODO MENU BUTTON

const todoCreator = document.querySelector('.todo-create');
const noteCreator = document.querySelector('.note-create');

// FORM PAGE

const todoSetter = document.querySelector('.todo-setter');
const noteSetter = document.querySelector('.note-setter');

// STEP BACK BUTTON

const exitCreator = document.querySelector('.todo-setter-nav-arrow i');
const exitNoteCreator = document.querySelector('.note-setter-nav-arrow i');

// EXIT BUTTON

const exitToMenu = document.querySelector('.todo-setter-nav-icons i');
const exitToMenuNote = document.querySelector('.note-setter-nav-icons i');
todoCreator.addEventListener('click', () => {
  todoSetter.classList.add('active-todo-setter');
});
noteCreator.addEventListener('click', () => {
  noteSetter.classList.add('active-note-setter');
});
exitCreator.addEventListener('click', () => {
  todoSetter.classList.remove('active-todo-setter');
  menu.classList.add('active-menu');
});
exitNoteCreator.addEventListener('click', () => {
  noteSetter.classList.remove('active-note-setter');
  menu.classList.add('active-menu');
});
exitToMenu.addEventListener('click', () => {
  todoSetter.classList.remove('active-todo-setter');
  menu.classList.remove('active-menu');
});
exitToMenuNote.addEventListener('click', () => {
  noteSetter.classList.remove('active-note-setter');
  menu.classList.remove('active-menu');
});

// TASK CREATOR FOR MOBILE

const todoMobileCreator = document.querySelector('.todo-create-mobile');
const noteMobileCreator = document.querySelector('.note-create-mobile');
todoMobileCreator.addEventListener('click', () => {
  todoSetter.classList.add('active-todo-setter');
});
noteMobileCreator.addEventListener('click', () => {
  noteSetter.classList.add('active-note-setter');
});
exitCreator.addEventListener('click', () => {
  todoSetter.classList.remove('active-todo-setter');
  mobileMenu.classList.add('active-menu-mobile');
  document.querySelector('.mobile-adder i').classList.add('rotated');
  mobileTodoIcon.classList.add('active-todo-mobile');
  mobileProjectIcon.classList.add('active-project-mobile');
  mobileNoteIcon.classList.add('active-note-mobile');
  todoPar.classList.add('options-appear');
  projectPar.classList.add('options-appear');
  notePar.classList.add('options-appear');
  document.querySelector('body').classList.add('menu-active');
});
exitNoteCreator.addEventListener('click', () => {
  noteSetter.classList.remove('active-note-setter');
  mobileMenu.classList.add('active-menu-mobile');
  document.querySelector('.mobile-adder i').classList.add('rotated');
  mobileTodoIcon.classList.add('active-todo-mobile');
  mobileProjectIcon.classList.add('active-project-mobile');
  mobileNoteIcon.classList.add('active-note-mobile');
  todoPar.classList.add('options-appear');
  projectPar.classList.add('options-appear');
  notePar.classList.add('options-appear');
  document.querySelector('body').classList.add('menu-active');
});
exitToMenu.addEventListener('click', () => {
  todoSetter.classList.remove('active-todo-setter');
  mobileMenu.classList.remove('active-menu-mobile');
  document.querySelector('.mobile-adder i').classList.remove('rotated');
  mobileTodoIcon.classList.remove('active-todo-mobile');
  mobileProjectIcon.classList.remove('active-project-mobile');
  mobileNoteIcon.classList.remove('active-note-mobile');
  todoPar.classList.remove('options-appear');
  projectPar.classList.remove('options-appear');
  notePar.classList.remove('options-appear');
  document.querySelector('body').classList.remove('menu-active');
});
exitToMenuNote.addEventListener('click', () => {
  noteSetter.classList.remove('active-note-setter');
  mobileMenu.classList.remove('active-menu-mobile');
  document.querySelector('.mobile-adder i').classList.remove('rotated');
  mobileTodoIcon.classList.remove('active-todo-mobile');
  mobileProjectIcon.classList.remove('active-project-mobile');
  mobileNoteIcon.classList.remove('active-note-mobile');
  todoPar.classList.remove('options-appear');
  projectPar.classList.remove('options-appear');
  notePar.classList.remove('options-appear');
  document.querySelector('body').classList.remove('menu-active');
});

// NOTE CREATOR
