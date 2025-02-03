const FORM_STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

const formData = {
    email: "",
    message: ""
  };
  
let object = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || {};

function setValue({ email, message }) {
  input.value = email || '';
  textarea.value = message || '';
}
try {
  object = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY)) || {};
} catch (error) {
  console.error('Error parsing localStorage:', error);
  object = {};
}
setValue(object);

form.addEventListener('input', (e) => {
  const element = e.target.name;
  const value = e.target.value;
  object[element] = value;

  localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(object));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (input.value.trim() && textarea.value.trim()) {
  localStorage.removeItem(FORM_STORAGE_KEY);

    input.value = '';
    textarea.value = '';

    console.log(object);
    object = {};
  } else {
    alert('All fields should be filled in');
  }

});