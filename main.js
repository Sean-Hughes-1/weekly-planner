let data = [
  entries = {},
  editing = null,
]

const $addNewEvent = document.querySelector('.add-event');
const $overlay = document.querySelector('.overlay');
const $cancelButton = document.querySelector('.cancel');
const $confirmButton = document.querySelector('.confirm');
const $tbody = document.querySelector('tbody');
const $dayOfWeekDropDown = document.getElementById('days');
const $entryForm = document.querySelector('.popupForm');
const $noEntriesText = document.getElementById('no-entries');
const $table = document.querySelector('table');

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

  const $editBoxTd = document.createElement('td');
  $editBoxTd.setAttribute('class', 'edit-box');
  $tr.appendChild($editBoxTd);

  const $editButton = document.createElement('button');
  $editButton.setAttribute('class', 'edit-button');
  $editButton.textContent = 'Edit';
  $editBoxTd.appendChild($editButton);

  const $deleteButton = document.createElement('button');
   $deleteButton.setAttribute('class', 'delete-button');
   $deleteButton.textContent = 'Delete';
  $editBoxTd.appendChild($deleteButton);

  return $tr;
}

$entryForm.addEventListener('click', (event) => {
  event.preventDefault();
  const output = {};
  const clicked = event.target;
  if (clicked.className === 'confirm') {
  const $timeOfEvent = document.getElementById('time').value;
  const $dayOfEvent = document.getElementById('day').value;
  const $eventInfo = document.getElementById('event-info').value;
  output.time = $timeOfEvent;
  output.day = $dayOfEvent;
  output.event = $eventInfo;
  const $newTr = renderEntry(output);
  $overlay.className = 'overlay hidden';
  $tbody.prepend($newTr);

  if ($tbody.hasChildNodes()) {
    $noEntriesText.classList.add('hidden')
    $table.classList.remove('hidden');

} else {
  $noEntriesText.classList.remove('hidden');
  $table.classList.add('hidden');

}
}
window.addEventListener('beforeunload', beforeunloadHandler(output));


  });



 function beforeunloadHandler(entry) {
  const JSONentry = JSON.stringify(entry);
  localStorage.setItem('event-entry', JSONentry);
 }
