// Задание 1
const heading1 = document.querySelector('#heading1');
const toggleBtn = document.querySelector('#toggleBtn');

toggleBtn.addEventListener('click', function() {
    if (heading1.classList.contains('hidden')) {
        heading1.classList.remove('hidden');
        toggleBtn.textContent = 'Скрыть';
    } else {
        heading1.classList.add('hidden');
        toggleBtn.textContent = 'Показать';
    }
});

// Задание 2
const colorText = document.querySelector('#colorText');
const colorBtn = document.querySelector('#colorBtn');

colorBtn.addEventListener('click', function() {
    colorText.style.color = 'blue';
});

// Задание 3
const changeableHeading = document.querySelector('#changeableHeading');
const changeTextBtn = document.querySelector('#changeTextBtn');

changeTextBtn.addEventListener('click', function() {
    changeableHeading.textContent = 'Привет, мир!';
});

// Задание 4
const changeAllBtn = document.querySelector('#changeAllBtn');
const descriptionElements = document.querySelectorAll('.description');

changeAllBtn.addEventListener('click', function() {
    descriptionElements.forEach(element => {
        element.textContent = 'Измененный текст';
    });
});

// Задание 5
const changeDescriptionsBtn = document.querySelector('#changeDescriptionsBtn');

changeDescriptionsBtn.addEventListener('click', function() {
    const allDescriptions = document.querySelectorAll('.description');
    allDescriptions.forEach(element => {
        element.textContent = 'Новый текст';
    });
});

// Задание 6
const addElementBtn = document.querySelector('#addElementBtn');
const newElementsContainer = document.querySelector('#newElementsContainer');

addElementBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Новый абзац';
    newElementsContainer.appendChild(newParagraph);
});

// Задание 7
const removeElementBtn = document.querySelector('#removeElementBtn');

removeElementBtn.addEventListener('click', function() {
    const firstDescription = document.querySelector('.description');
    if (firstDescription) {
        firstDescription.remove();
    }
});