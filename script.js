document.getElementById('add-btn').addEventListener("click", addTask);
document.getElementById('todo-input').addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        addTask();
    }
})

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if(taskText === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a delete button to the list item
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    })
    
    // Append deleteButton to list Item
    listItem.appendChild(deleteButton);
    
    // Add the ne task to the list 
    const taskList = document.getElementById('todo-list');
    taskList.appendChild(listItem);

    taskInput.value = '';
}