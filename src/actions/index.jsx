
export const addTodoRemote = todoItem => {
    return {
        type: "ADD_TODO_REMOTE",
        todoItem
    }
}

export const deleteTodo = id => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const reverseMark = id => {
    return {
        type: "REVERSE_MARK",
        id
    }
}

export function resetTodos(){
    return{
        type:"RESET_TODOS"
    }
}
//todo
