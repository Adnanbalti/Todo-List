document.getElementById('add-btn').addEventListener("click", addTask);
document.getElementById('todo-input').addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();

    if (taskText === '') 
        alert("Please Enter Your Task");
        

    const listItem = document.createElement('li');

    // Create a span element to hold the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(listItem);
    });

    // Create an edit button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => {
        // When the Edit button is clicked, turn the task text into an input field
        const originalText = taskSpan.textContent;
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = originalText;

        // Replace the task text with the input field
        taskSpan.textContent = '';
        taskSpan.appendChild(inputField);
        inputField.focus();

        // When the user presses Enter or loses focus, update the text
        inputField.addEventListener('blur', () => {
            saveEdit(inputField.value);
        });
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') saveEdit(inputField.value);
        });

        // Function to save the edited text
        function saveEdit(newText) {
            if (newText.trim() !== '') {
                taskSpan.textContent = newText;
            } else {
                taskSpan.textContent = originalText;  // If empty, revert to original text
            }
        }
    });

    // Append the edit and delete buttons to the list item
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    // Add the new task to the list
    const taskList = document.getElementById('todo-list');
    taskList.appendChild(listItem);

    // Clear the input field after adding the task
    taskInput.value = '';
}
