
function createItem(title) {
	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'checkbox';

	var label = document.createElement('label');
	label.innerText = title;
	label.className = 'listItem__title'
	
	var editInput = document.createElement('input');
	editInput.type = 'text';
	editInput.className = 'textfield';

	var editBtn = document.createElement('button');
	editBtn.innerText = 'Edit';
	editBtn.className = 'listItem__edit';

	var delBtn = document.createElement('button');
	delBtn.innerText = 'Delete';
	delBtn.className = 'listItem__delete';

	var listItem = document.createElement('li');
	listItem.className = 'listItem';

	listItem.appendChild(checkbox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editBtn);
	listItem.appendChild(delBtn);
	
	console.log(listItem);
	return listItem;
}

function addListItem(event) {
	event.preventDefault();
	if (todoInput.value === '')
		return (alert("You need to enter any text"));
	todoList.appendChild(createItem(todoInput.value));
	todoInput.value = '';
}

var todoForm = document.getElementById('todo__form');
var todoInput = document.getElementById('form__addInput');
var todoList = document.getElementById('todo__list');
var todoItems = document.querySelectorAll('listItem');

if (todoForm)
	todoForm.addEventListener('submit', addListItem);
