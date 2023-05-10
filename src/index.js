const menu = document.querySelector('.creator-menu');
const creator = document.querySelector('.project-creator');
creator.addEventListener('click', () => {
  menu.classList.add('active-menu');
});
const cross = document.querySelector('.leave-creator i');
cross.addEventListener('click', () => {
  menu.classList.remove('active-menu');
});

// MOBILE MENU ANIMATION

const mobileAdder = document.querySelector('.mobile-adder');
const mobileMenu = document.querySelector('.creator-menu-mobile');
const mobileTodoIcon = document.querySelector('.todo-create-mobile');
const mobileProjectIcon = document.querySelector('.project-create-mobile');
const mobileNoteIcon = document.querySelector('.note-create-mobile');
const todoPar = document.querySelector('.todo-create-mobile p');
const projectPar = document.querySelector('.project-create-mobile p');
const notePar = document.querySelector('.note-create-mobile p');
mobileAdder.addEventListener('click', () => {
  mobileMenu.classList.toggle('active-menu-mobile');
  document.querySelector('.mobile-adder i').classList.toggle('rotated');
  mobileTodoIcon.classList.toggle('active-todo-mobile');
  mobileProjectIcon.classList.toggle('active-project-mobile');
  mobileNoteIcon.classList.toggle('active-note-mobile');
  todoPar.classList.toggle('options-appear');
  projectPar.classList.toggle('options-appear');
  notePar.classList.toggle('options-appear');
  document.querySelector('body').classList.toggle('menu-active');
});
