
import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const inputEl = document.querySelector('.feedback-form input');

const textareaEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateData();

formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {

  formData.email = inputEl.value;
  formData.message = textareaEl.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

}

function onFormSubmit(e) {
  e.preventDefault();
  formData.email = inputEl.value;
  formData.message = textareaEl.value;
   console.log(formData);

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function populateData() {
    if (localStorage.getItem(STORAGE_KEY)) {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    textareaEl.value = parsedData.message;

    inputEl.value = parsedData.email;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedData));
  }
}