import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

// Відновлення даних з локального сховища при завантаженні сторінки
populateTextarea();

form.addEventListener('input', throttle(saveFormData, 500));
form.addEventListener('submit', onFormSubmit);

function saveFormData() {
  const formData = new FormData(form);
  let savedData = {};

  formData.forEach((value, key) => {
    savedData[key] = value;
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

function populateTextarea() {
  const savedData = localStorage.getItem(STORAGE_KEY);

  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.keys(parsedData).forEach(key => {
      if (form.elements[key]) {
        form.elements[key].value = parsedData[key];
      }
    });
  }
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
