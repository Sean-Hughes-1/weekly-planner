const $addNewEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');
const $cancelButton = document.querySelector('.cancel');
const $confirmButton = document.querySelector('.confirm');
const $tbody = document.querySelector('tbody');
$addNewEvent.addEventListener('click', function(event){
  $overlay.className = 'overlay';
});

$cancelButton.addEventListener('click', (event) => {
  $overlay.className = 'overlay hidden';
})

function renderEntry(entry) {
  const $tr = document.createElement('tr');
  const $tdTime = document.createElement('td');
  $tdTime.setAttribute('id','time');
  $tdTime.textContent = entry.time;
  $tr.appendChild($tdTime);
  const $tdEvent = document.createElement('td');
  $tdEvent.setAttribute('id','event');
  $tdEvent.textContent = entry.event;
  $tr.appendChild($tdEvent);
  // const $editBoxTd = document.createElement('td');
  // $editBoxTd.setAttribute('class', 'edit-box');
  // const $button = document.createElement('button');
  // const $editButton = $button.setAttribute('class', 'edit-button');
  // const $deleteButton = $button.setAttribute('class', 'delete-button');
  // $td.textContent = entry.time;
  // $td.textContent = entry.event;
  // $tr.appendChild($td);
  return $tr;
}
