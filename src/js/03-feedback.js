
// import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', onInput);

function onInput() {
    console.dir(feedbackForm.email.value);
}