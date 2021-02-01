const HEADER_OPEN = `header--open`;
const HEADER_CLOSE = `header--close`;
const BUTTON_CLOSE = `header__button--close`;
const HEADER_BREAKPOINT = 1200;

const button = document.querySelector(`.header__button`);
const header = document.querySelector(`.header`);

const handleMenu = () => {
  if (button.classList.contains(`header__button--close`)) {
    header.classList.remove(HEADER_OPEN);
    header.classList.add(HEADER_CLOSE);
    button.classList.remove(BUTTON_CLOSE);
    button.disabled = true;

    setTimeout(() => {
      header.classList.remove(HEADER_CLOSE);
      button.disabled = false;
    }, 1000);

    return;
  }

  header.classList.remove(HEADER_CLOSE);
  header.classList.add(HEADER_OPEN);
  button.classList.add(BUTTON_CLOSE);
  button.disabled = true;

  setTimeout(() => {
    button.disabled = false;
  }, 600);

  return;
}

const removeClasses = () => {
  if (window.screen.width > HEADER_BREAKPOINT) {
    header.classList.remove(HEADER_OPEN);
    header.classList.remove(HEADER_CLOSE);
    button.classList.remove(BUTTON_CLOSE);
    return;
  }
  return;
}

button.addEventListener(`click`, handleMenu);
window.addEventListener('resize', removeClasses);
