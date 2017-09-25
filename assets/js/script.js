((document) => {

	function createElement(tag, props, ...children) {
		var elem = document.createElement(tag);

		Object.keys(props).forEach(key => elem[key] = props[key]);

		if (children.length > 0) {
			children.forEach(child => {
				if (typeof (child) === 'string') {
					child = document.createTextNode(child);
				}
				elem.appendChild(child);
			});
		}
		return elem;
	}

	function createItem(title) {
		var checkbox = createElement('input', {
			type: 'checkbox',
			className: 'listItem__checkbox'
		}); //document.createElement('input');
		var label = createElement('label', {
			className: 'listItem__title'
		}, title);
		var editInput = createElement('input', {
			type: 'text',
			className: 'textfield'
		});
		var editBtn = createElement('button', {
			className: 'listItem__edit'
		}, 'Edit');
		var delBtn = createElement('button', {
			className: 'listItem__delete'
		}, 'Delete');
		var listItem = createElement('li', {
			className: 'listItem'
		}, checkbox, label, editInput, editBtn, delBtn);

		todoList.appendChild(listItem);
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
		} else {
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

})(document);