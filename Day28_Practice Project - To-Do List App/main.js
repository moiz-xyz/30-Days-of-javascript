let submit = document.getElementById("submit");
let input = document.getElementById("input");

function submitask() {
    // ADD TODO 
    let todoListdiv = document.getElementById("todolist");
    let createul = document.createElement("ul");
    createul.innerHTML = `
        <span class="task-text">${input.value}</span>
        <i class="fa-solid fa-pencil edit"></i>
        <i class="fa-solid fa-xmark remove"></i>
    `;

    todoListdiv.appendChild(createul);
    input.value = "";

    // FUNCTION TO DELETE A TODO 
    let removeBtn = createul.querySelector(".remove");
    removeBtn.addEventListener("click", () => {
        createul.remove();
    });
//     ❌ Incorrect: createul.document.getElementById("remove")
//     ✅ Correct: createul.querySelector("#remove") (since createul is not the whole document)


    // FUNCTION TO EDIT A TODO 
    let editBtn = createul.querySelector(".edit");
    editBtn.addEventListener("click", () => {
        let taskText = createul.querySelector(".task-text");

        // Create an input field to edit the task
        let replaceInput = document.createElement("input");
        replaceInput.type = "text";
        replaceInput.classList.add("input");
        replaceInput.value = taskText.textContent; // Keep the current task text

        // Replace the span with the input field
        createul.replaceChild(replaceInput, taskText);
        replaceInput.focus();

        // Save the edited value when Enter is pressed
        replaceInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                taskText.textContent = replaceInput.value;
                createul.replaceChild(taskText, replaceInput); // Switch back to text
            }
        });
    });
}

submit.addEventListener("click", submitask);

// ADDING SOME STYLING TO DO APP
let style = document.createElement("style");
style.innerHTML = `
/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

/* General Styles */
body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to right, #007bff, #00c6ff);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

/* Main Container */
.main {
    width: 400px;
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

h2 {
    color: #007bff;
    font-weight: 600;
}

/* Input Section */
#getting-inputs {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}

#input {
    width: 70%;
    padding: 10px;
    border: 2px solid #007bff;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

#submit {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 16px;
    transition: 0.3s;
}

#submit:hover {
    background: #0056b3;
}

/* To-Do List */
#todolist {
    margin-top: 20px;
    padding: 0;
}

/* Task Styling */
ul {
    list-style: none;
    background: white;
    padding: 12px 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
    transition: 0.3s;
}

ul:hover {
    transform: scale(1.03);
}

/* Task Text */
.task-text {
    font-size: 16px;
    font-weight: 500;
    color: #333;
}

/* Icons */
.edit, .remove {
    cursor: pointer;
    font-size: 18px;
    padding: 5px;
    transition: 0.3s;
}

.edit {
    color: #007bff;
}

.edit:hover {
    color: #0056b3;
}

.remove {
    color: #ff4d4d;
}

.remove:hover {
    color: #b30000;
}

/* Edit Input */
.input {
    width: 70%;
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 16px;
    outline: none;
}

`
document.head.append(style);