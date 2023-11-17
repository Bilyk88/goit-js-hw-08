
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';
const data = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};

fillForm();

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

function onInput(event) {

    data[event.target.name] = event.target.value;

    localStorage.setItem(FORM_KEY, JSON.stringify(data));

}

function onSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    console.log(data);
    localStorage.removeItem(FORM_KEY);

}

function fillForm() {
    const savedMessage = localStorage.getItem(FORM_KEY); 

    if (savedMessage) {
        const { email, message } = JSON.parse(savedMessage);

        feedbackForm.elements.email.value = email ?? '';
        feedbackForm.elements.message.value = message ?? '';
    }
}