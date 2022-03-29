
    //defining array
const tasks = [];

//function for adding the tasks
function addTask() {
    let taskname=document.querySelector('#Task').value
    if( taskname !='')
    {
        tasks.push(taskname);   //pushing value in array
        displayTask();          //displaying tasks after adding
    }
}

//displaying tasks
function displayTask(){
    if (tasks.length!==0)
    {
        let display = '', tList='';
        for (let i of tasks) {
            display += '<li>' + i + '</li>';
            document.querySelector('#taskList').innerHTML = display;
            tList+='<option>' + i + '</option>'
            document.querySelector('#deleteTask').innerHTML = tList;
            document.querySelector('#Task').value='';
        }
    }
    else
    {
        document.querySelector('#taskList').innerHTML = '';
        document.querySelector('#deleteTask').innerHTML = '';
    }
}

//deleting tasks
function deleteTask() {
    let del = document.getElementById('deleteTask');
    let i= del.selectedIndex;
    tasks.splice(i,1);
    displayTask();      //displaying tasks after deleting
}



