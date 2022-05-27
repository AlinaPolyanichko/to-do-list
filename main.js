

const
    inputTask = document.querySelector('#input-task')
    , addTaskBt = document.querySelector('#add-task-button')
    , taskList  = document.querySelector('#task-list')
    , tasks     = JSON.parse(localStorage.getItem('tasks') || '[]')
    , savTasks  =_=> localStorage.setItem('tasks',JSON.stringify(tasks))
;
tasks.forEach( newLItask )

addTaskBt.onclick =_=>
{
    if (inputTask.value.trim()==='') return

    let taskElm = { txt: inputTask.value.trim(), checking:false }
    tasks.push( taskElm )

    newLItask( taskElm )
    savTasks()

    inputTask.value = ''
    inputTask.focus()
}
taskList.onclick = ({target}) =>
{
    if (!target.matches('button.delete-btn, input[type=checkbox]')) return
    let taskIndex = tasks.findIndex(task => task===target.closest('li').ref )

    if (target.matches('input[type=checkbox]'))
        tasks[taskIndex].checking = target.checked
    else  // delete
    {
        tasks.splice(taskIndex,1)
        target.closest('li').remove()
    }
    savTasks()
}
function newLItask( taskElm )
{
    taskList
        .appendChild(Object.assign(document.createElement('li'), {ref:taskElm} ))
        .innerHTML = `
    <input type="checkbox" class="checkbox" ${taskElm.checking ? 'checked': ''}>
    <span class="task">${taskElm.txt}</span>
    <button class="delete-btn">Delete</button>`
}
