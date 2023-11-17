const $addNewEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');


$addNewEvent.addEventListener('click', function(event){
  $overlay.className = 'overlay';
})
