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
  const $td = document.createElement('td');
  const $editBoxTd = document.createElement('td');
  $editBoxTd.setAttribute('class', 'edit-box');
  const $button = document.createElement('button');
  const $editButton = $button.setAttribute('class', 'edit-button');
  const $deleteButton = $button.setAttribute('class', 'delete-button' );
  $tbody.appendChild($tr);
  $td.textContent = entry.time;
  $tr.appendChild('$td')
  return $tr;
}
