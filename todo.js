
let todoList = [{item : 'apple', dueDate : '4/10/2023'},
                {item : 'mango', dueDate : '4/10/2023'}];
displayItems();

function addTodo()
{
    let dateElem = document.querySelector('#todo-date');
    let inputElem = document.querySelector('#todo-input');
    let todoItem = inputElem.value;
    let todoDate = dateElem.value;
    todoList.push({item : todoItem,dueDate : todoDate});
    inputElem.value = ' ';
    dateElem.value = ' ';
    displayItems();
}

function displayItems()
{
    let containerElements  = document.querySelector('.todo-container');
     
    let newHtml = '';
    for(let i = 0; i < todoList.length; i++)
        {
            let item = todoList[i].item;
            let dueDate = todoList[i].dueDate;

            newHtml += `
                <span>${item}</span>
                <span>${dueDate}</span>
                <button class = "btn-delete" onclick = "todoList.splice(${i},1);
                displayItems();">
                Delete</button>
            `;
        }
        containerElements.innerHTML = newHtml;
} 