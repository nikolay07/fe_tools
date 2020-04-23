var popupElem = document.querySelector('.popup');
var popupContentElem = document.querySelector('.popup__content'); // в попап нужно передавать координаты, в которых показать попап

export function openPopup(x, y) {
  popupElem.classList.remove('hidden');
  popupContentElem.style.top = "".concat(y, "px");
  popupContentElem.style.left = "".concat(x, "px");
}
export function closePopup() {
  popupElem.classList.add('hidden');
}

function onClickInsidePopup(event) {
  event.stopPropagation();
}

popupContentElem.addEventListener('click', onClickInsidePopup);
popupElem.addEventListener('click', closePopup);