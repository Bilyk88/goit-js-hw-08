
import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const textarea = document.querySelector('[name="message"]');

const FORM_KEY = 'feedback-form-state';
const data = JSON.parse(localStorage.getItem(FORM_KEY)) ?? {};

fillForm();

feedbackForm.addEventListener('input', throttle(onInput, 500));
feedbackForm.addEventListener('submit', onSubmit);

function onInput() {

    data.email = email.value;
    data.message = textarea.value;

    localStorage.setItem(FORM_KEY, JSON.stringify(data));

}

function onSubmit(event) {

    event.preventDefault();
    event.currentTarget.reset();

    localStorage.removeItem(FORM_KEY);
    
    console.log(data);
    
}

function fillForm() {
    
    const savedMessage = JSON.parse(localStorage.getItem(FORM_KEY)); 

    if (savedMessage) {

        email.value = savedMessage.email;
        textarea.value = savedMessage.message;

    }
} 
