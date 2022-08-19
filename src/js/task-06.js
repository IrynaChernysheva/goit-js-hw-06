//Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
//Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
//Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
//Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.
const formEl = document.querySelector(`#validation-input`);
formEl.addEventListener(`blur`, onBlur);
function onBlur(event) {
	const element = event.currentTarget;
	const elementLength = Number(element.dataset.length);
	if (element.value.length === elementLength) {
		element.classList.remove("invalid");
		element.classList.add(`valid`);
	} else {
		element.classList.remove("valid");
		element.classList.add(`invalid`);
	}
}

