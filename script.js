document
  .getElementById("todoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
      alert("Please enter a task.");
      return;
    }

    addTodoItem(todoText);
    todoInput.value = "";
  });

/* 
-Event Listener: We add an event listener to the form element (todoForm). This listens for the submit event.

-Prevent Default: event.preventDefault() prevents the form from submitting in the traditional way (i.e., reloading the page).

-Get Input Value: We get the value from the input field (todoInput), trimming any extra spaces with trim().

-Check for Empty Input: If the input is empty, we alert the user and return early to avoid adding an empty task.

-Add Task: If the input is not empty, we call addTodoItem(todoText) to add the task to the list.

-Clear Input: After adding the task, we clear the input field by setting its value to an empty string.
*/

function addTodoItem(text) {
  const todoList = document.getElementById("todoList");

  const li = document.createElement("li");
  li.textContent = text;

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    todoList.removeChild(li);
  });

  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  todoList.appendChild(li);
}

/* 
-Get To-Do List: We get the ul element (todoList) where tasks will be added.

-Create List Item: We create a new li element and set its textContent to the task text provided as an argument.

-Complete Button: Create a button element and set its text to "Complete".

-Add an event listener to the button that toggles the completed class on the li element when clicked. This will apply a strikethrough style defined in the CSS.

-Delete Button: Create another button element and set its text to "Delete".

-Add an event listener to the button that removes the li element from the ul when clicked.

-Append Buttons to List Item: We append both the complete and delete buttons to the li element.

-Append List Item to To-Do List: Finally, we append the li element to the ul (todoList).
*/

/* 
-How the JavaScript Interacts with HTML and CSS

-HTML Elements: The JavaScript code interacts with the HTML elements by selecting them using getElementById and modifying their content or behavior based on user actions.

-Event Listeners: We use event listeners to handle user actions like form submission and button clicks. These listeners trigger functions that modify the DOM.

-DOM Manipulation: Functions like addTodoItem create new elements, set their properties, and append them to the existing DOM structure.

-CSS Classes: The completed class is toggled on tasks to apply different styles defined in the CSS (like strikethrough).
*/

/* 
-Example Flow

-User Input: User enters a task in the input field and submits the form.

-Form Submission: The event listener on the form captures the submit event, prevents default form submission, and retrieves the input value.

-Add Task: The input value is passed to addTodoItem, which creates a new list item with "Complete" and "Delete" buttons.

-Complete Task: Clicking the "Complete" button toggles the completed class on the task, visually marking it as complete.

-Delete Task: Clicking the "Delete" button removes the task from the list.
*/
