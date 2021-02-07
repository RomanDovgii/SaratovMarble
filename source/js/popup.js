const PopupClasses = {
  OPEN: `popup--open`,
  CLOSE: `popup--close`,
  ERROR: `popup--error`,
  SENT: `popup--sent`,
  REMOVED: `popup--removed`
}


const popup = document.querySelector(`.popup`);
const closeButton = popup.querySelector(`.popup__close`);
const orderButton = document.querySelector(`.product__order`);
const submitButton = popup.querySelector(`.popup__submit`);

const openPopup = (evt) => {
  evt.preventDefault();
  popup.classList.add(PopupClasses.OPEN);
  popup.classList.remove(PopupClasses.REMOVED);
  popup.classList.remove(PopupClasses.CLOSE);
  popup.classList.remove(PopupClasses.ERROR);
  popup.classList.remove(PopupClasses.SENT);

  closeButton.addEventListener(`click`, closePopup);
  submitButton.addEventListener(`click`, sendPopup);
  orderButton.disabled = true;
}

const closePopup = () => {
  popup.classList.add(PopupClasses.CLOSE);
  popup.classList.remove(PopupClasses.REMOVED);
  popup.classList.remove(PopupClasses.OPEN);
  popup.classList.remove(PopupClasses.ERROR);
  popup.classList.remove(PopupClasses.SENT);

  closeButton.removeEventListener(`click`, closePopup);
  submitButton.removeEventListener(`click`, sendPopup);
  clearPopup();
}

const sendPopup = (evt) => {
  evt.preventDefault();
  submitButton.disabled = true;
  popup.classList.add(PopupClasses.SENT);
  popup.classList.remove(PopupClasses.REMOVED);
  popup.classList.remove(PopupClasses.OPEN);
  popup.classList.remove(PopupClasses.ERROR);
  popup.classList.remove(PopupClasses.CLOSE);

  closeButton.removeEventListener(`click`, closePopup);
  submitButton.removeEventListener(`click`, sendPopup);
  clearPopup();
}

const showErrorPopup = () => {
  popup.classList.add(PopupClasses.ERROR);
  popup.classList.remove(PopupClasses.REMOVED);
  popup.classList.remove(PopupClasses.OPEN);
  popup.classList.remove(PopupClasses.SENT);
  popup.classList.remove(PopupClasses.CLOSE);
}

const clearPopup = () => {
  setTimeout(() => {
    popup.classList.remove(PopupClasses.ERROR);
    popup.classList.remove(PopupClasses.OPEN);
    popup.classList.remove(PopupClasses.SENT);
    popup.classList.remove(PopupClasses.CLOSE);
    submitButton.disabled = false;
    orderButton.disabled = false;
    popup.classList.add(PopupClasses.REMOVED);
  }, 90);
}

orderButton.addEventListener(`click`, openPopup)
