function createPhoneMenu() {
  const mobileMenuIcon = document.querySelector('.mobile-menu');
  const mobileMenu = document.querySelector('.nav');
  const taskBoard = document.querySelector('.task-board');
  const body = document.querySelector('body');
  // const options = document.querySelectorAll('.options div');
  // const listOptions = document.querySelectorAll('.project-list');

  // options.forEach((option) => {
  //   option.addEventListener('click', () => {
  //     mobileMenu.style.pointerEvents = 'none';
  //     mobileMenu.style.left = '-400px';
  //     mobileMenu.style.width = '0%';
  //     mobileMenu.style.opacity = '1';

  //     taskBoard.style.pointerEvents = 'all';
  //     taskBoard.style.filter = 'none';

  //     body.style.overflow = 'visible';
  //   });
  // });

  // listOptions.forEach((option) => {
  //   option.addEventListener('click', () => {
  //     mobileMenu.style.pointerEvents = 'none';
  //     mobileMenu.style.left = '-400px';
  //     mobileMenu.style.width = '0%';
  //     mobileMenu.style.opacity = '1';

  //     taskBoard.style.pointerEvents = 'all';
  //     taskBoard.style.filter = 'none';

  //     body.style.overflow = 'visible';
  //   });
  // });

  mobileMenuIcon.addEventListener('click', () => {
    mobileMenu.style.pointerEvents = 'all';
    mobileMenu.style.left = '0';
    mobileMenu.style.width = '80%';
    mobileMenu.style.opacity = '1';

    taskBoard.style.pointerEvents = 'none';
    taskBoard.style.filter = 'brightness(0.3)';

    body.style.overflow = 'hidden';
    mobileMenu.classList.add('active-nav');
  });

  document.addEventListener('click', (event) => {
    const clickedElement = event.target;

    const allClasses = [];
    let parentElement = clickedElement;

    while (parentElement !== null) {
      const elementClasses = Array.from(parentElement.classList);
      allClasses.push(...elementClasses);

      parentElement = parentElement.parentElement;
    }

    if (!allClasses.includes('nav') && !allClasses.includes('mobile-menu') && mobileMenu.classList.contains('active-nav')) {
      mobileMenu.style.pointerEvents = 'none';
      mobileMenu.style.left = '-300px';
      mobileMenu.style.width = '10%';
      mobileMenu.style.opacity = '1';

      taskBoard.style.pointerEvents = 'all';
      taskBoard.style.filter = 'none';

      body.style.overflow = 'visible';
      mobileMenu.classList.remove('active-nav');
    }
  });
}

export default createPhoneMenu;
