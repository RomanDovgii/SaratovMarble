const HEADER_OPEN = `header--open`;
const BUTTON_CLOSE = `header__button--close`;

const button = document.querySelector(`.header__button`);
const header = document.querySelector(`.header`);

const handleMenu = () => {
  if (button.classList.contains(`header__button--close`)) {
    header.classList.remove(HEADER_OPEN);
    button.classList.remove(BUTTON_CLOSE);
    return;
  }

  header.classList.add(HEADER_OPEN);
  button.classList.add(BUTTON_CLOSE);
  return;
}

button.addEventListener(`click`, handleMenu);
