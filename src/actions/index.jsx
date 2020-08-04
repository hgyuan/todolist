
export const addTodoRemote = (id,text,mark) => {
    return {
        type: "ADD_TODO_REMOTE",
        id,
        text,
        mark
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
