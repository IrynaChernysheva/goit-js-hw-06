//Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector(`.color`);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btnEl.addEventListener(`click`, onClick);
function onClick() {
  const colorEl = getRandomHexColor();
  document.body.style.backgroundColor = `${colorEl}`;
  spanEl.textContent = color;
}
