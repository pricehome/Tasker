// Define Vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Define for loading all event listeners
loadEventListener()

// Load all event listeners
function loadEventListener() {
	form.addEventListener('submit', addTask)
	// taskList.addEventListener('click', removeTask)
}

// Add task
function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a Task')
	}
	// CREATE LI ELEMENT
	const li = document.createElement('li')
	// add class
	li.className = 'collection-item'
	// create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value))
	// create new link element for delete
	const link = document.createElement('a')
	// Add class----in materialize the seconary-content class moves it to the right
	link.className = 'delete-item secondary-content'
	// add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>'
	// append the link to li
	li.appendChild(link)
	// append the li to the ul
	taskList.appendChild(li)
	// Clear input
	taskInput.value = ''
	e.preventDefault()
}

// function removeTask(e) {
// 	if (e.target.parentElement.classList.contains('delete-item')) {
// 		if (confirm('Are You Sure?')) {
// 			e.target.parentElement.parentElement.remove()
// 		}
// 	}
// }
