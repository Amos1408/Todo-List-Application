const valueInput=document.getElementById("valueInput");
    const main_todo= document.querySelector('.todo-lists-element')
    const addTaskBtn=document.querySelector('#addTask');

    addTaskBtn.addEventListener('click',()=>{
        addTodoList();
    })

    function addTodoList(){
        const div_element = document.createElement('div');
        div_element.classList.add('main_todo_div', 'd-flex','justify-content-between', 'align-items-center', 'w-100');
        
        const listItem = document.createElement('li');
        listItem.textContent=valueInput.value;
        listItem.classList.add('mb-0')

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn', 'btn-primary', 'mt-2', 'ms-2');
        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
            div_element.remove();
        });

        div_element.appendChild(listItem);
        div_element.appendChild(deleteBtn);
        main_todo.appendChild(div_element);
    }