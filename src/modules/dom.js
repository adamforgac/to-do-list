function callDom() {
  const menu = document.querySelector('.creator-menu');
  const creator = document.querySelector('.project-creator');

  function closeDetails() {
    const taskDetails = document.querySelector('.task-details');
    const wrapper = document.querySelector('.wrapper');
    setTimeout(() => {
      wrapper.classList.remove('details');
    }, 250);
    taskDetails.classList.remove('active-task-details');
  }

  creator.addEventListener('click', () => {
    closeDetails();
    menu.classList.add('active-menu');
    document.querySelector('body').classList.add('menu-active');
  });

  const cross = document.querySelector('.leave-creator i');
  cross.addEventListener('click', () => {
    menu.classList.remove('active-menu');
    document.querySelector('body').classList.remove('menu-active');
  });

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

  const todoCreator = document.querySelector('.todo-create');
  const noteCreator = document.querySelector('.note-create');
  const projectCreator = document.querySelector('.project-create');
  const todoSetter = document.querySelector('.todo-setter');
  const todoEditor = document.querySelector('.todo-editor');
  const noteSetter = document.querySelector('.note-setter');
  const noteEditor = document.querySelector('.note-editor');
  const projectSetter = document.querySelector('.project-setter');
  const exitCreator = document.querySelector('.todo-setter-nav-arrow i');
  const exitCreatorEdit = document.querySelector('.todo-editor-nav-arrow i');
  const todoEditCreator = document.querySelector('.fa-pen-to-square');
  const exitNoteCreator = document.querySelector('.note-setter-nav-arrow i');
  const exitNoteEditor = document.querySelector('.note-editor-nav-arrow i');
  const exitProjectCreator = document.querySelector('.project-setter-nav-arrow i');
  const exitToMenu = document.querySelector('.todo-setter-nav-icons i');
  const exitToMenuEdit = document.querySelector('.todo-editor-nav-icons i');
  const exitToMenuNote = document.querySelector('.note-setter-nav-icons i');
  const exitToMenuNoteEdit = document.querySelector('.note-editor-nav-icons i');
  const exitToMenuProject = document.querySelector('.project-setter-nav-icons i');

  todoCreator.addEventListener('click', () => {
    todoSetter.classList.add('active-todo-setter');
  });
  todoEditCreator.addEventListener('click', () => {
    const currentList = document.querySelector('.details-list p');
    if (currentList.textContent === 'Notes') {
      noteEditor.classList.add('active-note-editor');
    } else {
      todoEditor.classList.add('active-todo-editor');
    }
  });
  noteCreator.addEventListener('click', () => {
    noteSetter.classList.add('active-note-setter');
  });
  projectCreator.addEventListener('click', () => {
    projectSetter.classList.add('active-project-setter');
  });
  exitCreator.addEventListener('click', () => {
    todoSetter.classList.remove('active-todo-setter');
    menu.classList.add('active-menu');
  });
  exitCreatorEdit.addEventListener('click', () => {
    todoEditor.classList.remove('active-todo-editor');
    menu.classList.add('active-menu');
  });
  exitNoteCreator.addEventListener('click', () => {
    noteSetter.classList.remove('active-note-setter');
    menu.classList.add('active-menu');
  });
  exitNoteEditor.addEventListener('click', () => {
    noteEditor.classList.remove('active-note-editor');
    menu.classList.add('active-menu');
  });
  exitProjectCreator.addEventListener('click', () => {
    projectSetter.classList.remove('active-project-setter');
    menu.classList.add('active-menu');
  });
  exitToMenu.addEventListener('click', () => {
    todoSetter.classList.remove('active-todo-setter');
    menu.classList.remove('active-menu');
  });
  exitToMenuEdit.addEventListener('click', () => {
    todoEditor.classList.remove('active-todo-editor');
    menu.classList.remove('active-menu');
  });
  exitToMenuNote.addEventListener('click', () => {
    noteSetter.classList.remove('active-note-setter');
    menu.classList.remove('active-menu');
  });
  exitToMenuNoteEdit.addEventListener('click', () => {
    noteEditor.classList.remove('active-note-editor');
    menu.classList.remove('active-menu');
  });
  exitToMenuProject.addEventListener('click', () => {
    projectSetter.classList.remove('active-project-setter');
    menu.classList.remove('active-menu');
  });

  const todoMobileCreator = document.querySelector('.todo-create-mobile');
  const noteMobileCreator = document.querySelector('.note-create-mobile');
  const projectMobileCreator = document.querySelector('.project-create-mobile');

  todoMobileCreator.addEventListener('click', () => {
    todoSetter.classList.add('active-todo-setter');
  });
  noteMobileCreator.addEventListener('click', () => {
    noteSetter.classList.add('active-note-setter');
  });
  projectMobileCreator.addEventListener('click', () => {
    projectSetter.classList.add('active-project-setter');
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
  exitToMenuProject.addEventListener('click', () => {
    projectSetter.classList.remove('active-project-setter');
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
}

export default callDom;
