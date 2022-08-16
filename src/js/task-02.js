//Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
//Добавит название ингредиента как его текстовое содержимое.
//Добавит элементу класс item.
//После чего вставит все <li> за одну операцию в список ul#ingredients.
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingrEl = document.querySelector('#ingredients');

const ingrItemEl = ingredients => {

  return ingredients.map( ingredient => {

  const item = document.createElement('li');
  item.textContent = ingredient;
  item.classList.add('item');
  
  return item;
})
}

ingrEl.append(...ingrItemEl(ingredients));
console.log(ingrEl);

