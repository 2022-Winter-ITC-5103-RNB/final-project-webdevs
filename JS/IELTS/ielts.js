// import { config } from '@fortawesome/fontawesome-svg-core'
// import { config } from '@fortawesome/fontawesome-svg-core'

const todoInput = document.querySelector(".todo-input");
const todoButton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");

//Event Listener
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", checkDelete);

//functions
function addToDo(event){

    //prevent page form refreshing by preventing form submission
    event.preventDefault();

    //creating DIV for todo
    const todoDIV= document.createElement('div');
    todoDIV.classList.add("todo");

    //create LI inside DIV
    const newToDo=document.createElement('li');
    newToDo.innerText=todoInput.value;
    newToDo.classList.add("todo-item");
    todoDIV.appendChild(newToDo);

    //creating check button
    const checkButton= document.createElement('button');
    checkButton.innerHTML='<i class="fa-solid fa-check"></i>';
    checkButton.classList.add("chk-btn");
    todoDIV.appendChild(checkButton);

    //creating delete button
    const deleteButton= document.createElement('button');
    deleteButton.innerHTML='<i class="fa-solid fa-trash"></i>'
    deleteButton.classList.add("del-btn");
    todoDIV.appendChild(deleteButton);

    todoList.appendChild(todoDIV);

    //clearing input field
    todoInput.value="";
}

function checkDelete(event){

    const item= event.target;

    //for delete
    if(item.classList[0]==='del-btn'){
        const todo=item.parentElement;
        //animation
        todo.classList.add('fall');
        //when animation completes
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })
    }

    //for check
    if(item.classList[0]==="chk-btn"){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}