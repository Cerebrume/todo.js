


function createItem(title) {
	var checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.className = 'listItem__checkbox';

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
	
	todoList.appendChild(listItem);
	console.log(listItem);

	ft_events(listItem);
	
	return listItem;
}

function ft_events(listItem) {

	var checkbox = listItem.querySelector('.listItem__checkbox');
	var editBtn = listItem.querySelector('.listItem__edit');
	var deleteBtn = listItem.querySelector('.listItem__delete');

	checkbox.addEventListener('change', toggleTodoItem, false);
	editBtn.addEventListener('click', editTodoItem);
	deleteBtn.addEventListener('click', deleteTodoItem);
}

function addListItem(event) {
	event.preventDefault();
	if (todoInput.value === '')
		return (alert("You need to enter any text"));
	createItem(todoInput.value);
	todoInput.value = '';
}

function toggleTodoItem(event) {
	var listItem = this.parentNode;

	listItem.classList.toggle('completed');
}

function editTodoItem(event) {
	var listItem = this.parentNode;
	var title = listItem.querySelector('.listItem__title');
	var editInput = listItem.querySelector('.textfield');
	var isEditing = listItem.classList.contains('editing');

	if (isEditing) {
		title.innerText = editInput.value;
		this.innerText = 'Edit';
		editInput.style.display = 'none';
		title.style.display = 'block';
	}
	else {
		title.style.display = 'none';
		editInput.style.display = 'block';
		editInput.value = title.innerText;
		this.innerText = 'Save';
	}
	listItem.classList.toggle('editing');

}

function deleteTodoItem(event) {
	var listItem = this.parentNode;

	todoList.removeChild(listItem);
}

var todoForm = document.getElementById('todo__form');
var todoInput = document.getElementById('form__addInput');
var todoList = document.getElementById('todo__list');
var todoItems = document.querySelectorAll('.listItem');
	
function main() {
	todoForm.addEventListener('submit', addListItem);
	console.log(todoItems);
	todoItems.forEach(item => ft_events(item));
};

main();