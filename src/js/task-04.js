//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.
let counterValue = 0;
const refs = {
  decrementEl: document.querySelector('button[data-action="decrement"]'),
  incrementEl: document.querySelector('button[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
}

refs.decrementEl.addEventListener('click', onDecrementClick)
refs.incrementEl.addEventListener('click', onIncrementClick)


function onDecrementClick() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}

function onIncrementClick() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}