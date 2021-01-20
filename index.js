const textarea = document.querySelector('.textarea');
const playButton = document.querySelector('.play-button');
const stopButton = document.querySelector('.stop-button');

playButton.addEventListener('click', ()=>{
    if (textarea.value == null || textarea.value === '') {
        console.log('textarea is empty');
    }else {
        console.log(textarea.value);
    }
});